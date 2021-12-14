import React, { Component } from 'react';
import { render } from 'react-dom';

type Params = {
    usnPercent: number,
    // пенсионный фонд
    pfr: number,
    // пфр процент выше
    pfrPercent: number,
    // максимальный взнос пфр
    pfrMax: number,
    // федеральный фонд обязательного медицинского страхования
    ffoms: number,
};

const years: {[number]: Params} = {
    2019: {
        usnPercent: 6,
        // пенсионный фонд
        pfr: 29354,
        // пфр процент выше
        pfrPercent: 300000,
        // максимальный взнос пфр
        pfrMax: 234832,
        // федеральный фонд обязательного медицинского страхования
        ffoms: 6884,
    },
    2020: {
        usnPercent: 6,
        // пенсионный фонд
        pfr: 32448,
        // пфр процент выше
        pfrPercent: 300000,
        // максимальный взнос пфр
        pfrMax: 259584,
        // федеральный фонд обязательного медицинского страхования
        ffoms: 8426,
    },
};

type CalculationResult = {
    commission: number,
    pfr: number,
    pfrPercent: number,
    pfrTotal: number,
    ffoms: number,
    insuranceTotal: number,
    usn: number,
    usnTotal: number,
    totalWaste: number,
    total: number,
    income: number,
}

const bankStrategies = {
    percent: 'Процент от дохода',
    subscription: 'Фиксированная абонентская плата',
};

type State = {
    income: number,
    year: number,
    bankStrategy: $Keys<typeof bankStrategies>,
    bankValue: number,
};

export default class Calculator extends Component<null, State> {
    constructor(...args) {
        super(...args);

        this.state = {
            income: 25000,
            year: 2020,
            bankStrategy: 'percent',
            bankValue: 1,
        };
    }

    static inject(root, data) {
        render(<Calculator data={data}/>, root);
    }

    month(year) {
        return Math.round(year / 12);
    }

    year(year) {
        return Math.round(year);
    }

    handleIncomeChange(event) {
        this.setState({
            income: event.target.value,
        });
    }

    handleYearIncomeChange(event) {
        this.setState({
            income: event.target.value / 12,
        });
    }

    handleYearChange(event) {
        this.setState({
            year: event.target.value,
        });
    }

    handleBankStrategyChange(event) {
        this.setState({
            bankStrategy: event.target.value,
        });
    }

    handleBankValueChange(event) {
        this.setState({
            bankValue: event.target.value,
        });
    }

    handleCalculation(params: Params, state: State, event) {
        const income = parseInt(event.target.value);
        state = { ...state, income };
        let calculated = this.calculate(params, state);

        while (income > this.month(calculated.total)) {
            state.income += 500;
            calculated = this.calculate(params, state);
        }

        this.setState({income: state.income});
    }

    calculate(params: Params, state: State): CalculationResult {
        const income = state.income * 12;

        let commission = income * state.bankValue / 100;
        if (state.bankStrategy !== 'percent') {
            commission = state.bankValue * 12;
        }

        const pfr = params.pfr;

        const pfrPercent = Math.round(Math.max(0, (income - params.pfrPercent) * 0.01));

        const pfrTotal = Math.min(
            params.pfr + pfrPercent,
            params.pfrMax,
        );

        const ffoms = params.ffoms;

        const insuranceTotal = ffoms + pfrTotal;

        const usn = Math.round(income * params.usnPercent / 100);

        const usnTotal = Math.max(0, usn - insuranceTotal);

        const totalWaste = insuranceTotal + usnTotal + commission;

        const total = income - totalWaste;

        return {
            commission,
            pfr,
            pfrPercent,
            pfrTotal,
            ffoms,
            insuranceTotal,
            usn,
            usnTotal,
            totalWaste,
            total,
            income,
        };
    }

    render() {
        const state = this.state;
        const params: Params = years[state.year];
        const data = this.calculate(params, state);

        return <div>
            <div className="row">
                <div className="col-sm-6 col-lg-2">
                    <label>Год</label>
                    <select value={state.year} onChange={this.handleYearChange.bind(this)}>
                        {Object.keys(years).map((item) => <option value={item} key={item}>{item}</option>)}
                    </select>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <label>Желаемый доход</label>
                    <input type="number" min="0" onChange={this.handleCalculation.bind(this, params, state)}/>
                </div>

                <div className="col-sm-6 col-lg-5">
                    <label>Оплата расчетного счета в месяц</label>
                    <select value={state.bankStrategy} onChange={this.handleBankStrategyChange.bind(this)}>
                        {Object.entries(bankStrategies).map(([key, value]) => <option value={key}
                                                                                      key={key}>{value}</option>)}
                    </select>
                </div>

                <div className="col-sm-6 col-lg-2">
                    <label>{state.bankStrategy === 'percent' ? 'Процент' : 'В месяц'}</label>
                    <input type="number" min="0" step="" value={state.bankValue}
                           onChange={this.handleBankValueChange.bind(this)}/>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Месяц</th>
                        <th>Год</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Доход</th>
                        <td>
                            <input style={{ width: '100px' }} type="number" min="0" value={Math.round(state.income)}
                                   onChange={this.handleIncomeChange.bind(this)}/>
                        </td>
                        <td>
                            <input style={{ width: '100px' }} type="number" min="0" value={data.income}
                                   onChange={this.handleYearIncomeChange.bind(this)}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Комиссия банка</th>
                        <td>{this.month(data.commission)}</td>
                        <td>{this.year(data.commission)}</td>
                    </tr>
                    <tr>
                        <th>ПФР</th>
                        <td>{this.month(data.pfr)}</td>
                        <td>{this.year(data.pfr)}</td>
                    </tr>
                    <tr>
                        <th>ПФР 1% <small>(>{params.pfrPercent})</small></th>
                        <td>{this.month(data.pfrPercent)}</td>
                        <td>{this.year(data.pfrPercent)}</td>
                    </tr>
                    <tr>
                        <th>ПФР Итого</th>
                        <td>{this.month(data.pfrTotal)}</td>
                        <td>{this.year(data.pfrTotal)}</td>
                    </tr>
                    <tr>
                        <th>ФФОМС</th>
                        <td>{this.month(data.ffoms)}</td>
                        <td>{this.year(data.ffoms)}</td>
                    </tr>
                    <tr>
                        <th>Страховые взносы <small>ПФР&nbsp;+&nbsp;ФФОМС</small></th>
                        <td>{this.month(data.insuranceTotal)}</td>
                        <td>{this.year(data.insuranceTotal)}</td>
                    </tr>
                    <tr>
                        <th>УСН {params.usnPercent}%</th>
                        <td>{this.month(data.usn)}</td>
                        <td>{this.year(data.usn)}</td>
                    </tr>
                    <tr>
                        <th>УСН Без страховых</th>
                        <td>{this.month(data.usnTotal)}</td>
                        <td>{this.year(data.usnTotal)}</td>
                    </tr>
                    <tr>
                        <th>Итого расходов</th>
                        <td>{this.month(data.totalWaste)}</td>
                        <td>{this.year(data.totalWaste)}</td>
                    </tr>
                    <tr>
                        <th>Чистая прибыль</th>
                        <td>{this.month(data.total)}</td>
                        <td>{this.year(data.total)}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>;
    }
}
