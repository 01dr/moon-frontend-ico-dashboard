import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDashboard } from '../../../redux/modules/dashboard/dashboard';
import { fetchFee } from '../../../redux/modules/dashboard/txFee';

import ContributeForm from '../ContributeForm';
import BalanceInfo from '../BalanceInfo';
import IcoStatus from '../IcoStatus';

import s from './styles.scss';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchDashboard, fetchFee } = this.props;

    fetchDashboard();
    fetchFee();
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.main}>
          <div className={s.buyTokensForm}>
            <ContributeForm/>
          </div>
        </div>

        <div className={s.col}>
          <div className={s.widget}><BalanceInfo/></div>
          <div className={s.widget}><IcoStatus/></div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchDashboard,
    fetchFee
  }
)(Dashboard);
