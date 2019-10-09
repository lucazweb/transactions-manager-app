import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DeleteTransaction } from '../../service/FireService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as transactionActions from '../../store/actions/transactions';

import './style.scss';

const handleTransactionDelete = (selectedTransaction, removeTransactionReq, removeTransactionSuccess) => {
  DeleteTransaction(selectedTransaction.id)
    .then((res) => {
      removeTransactionSuccess(selectedTransaction);
    }).catch(err => console.error(err));
}

const ConfirmDeletionDialog = ({selectedTransaction, clearTransaction, removeTransactionReq, removeTransactionSuccess}) => (
  <Fragment>
    {
        selectedTransaction && (
            <div className="transaction-detail-overflow">
                <div className="transaction-detail-modal">
                    <button onClick={() => clearTransaction()} className="btn-close"><FontAwesomeIcon icon={faTimes} /></button>
                    <div className="transaction-modal-header">
                        <h2 className="title"> Remover transação</h2>
                    </div>
    
                    <div className="transaction-modal-body">
                        <p>Deseja remover esse item?</p>
                        <p>  <strong>{selectedTransaction.data.description} - R$ {selectedTransaction.data.value}</strong> </p>
                    </div>
    
                    <div className="transaction-modal-footer">
                        <button onClick={() => handleTransactionDelete(selectedTransaction, removeTransactionReq, removeTransactionSuccess) }  className="btn btn-remove-transaction">
                            <FontAwesomeIcon icon={faTrash} /> 
                            <span>Sim, tenho certeza</span>
                        </button>                             
                    </div>
                </div>
        </div>                 
        )
    }
  </Fragment>
);

ConfirmDeletionDialog.propTypes = {
  selectedTransaction: PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.PropTypes.shape({
      description: PropTypes.string,
      value: PropTypes.number,
      category: PropTypes.string,
      timestamp: PropTypes.shape({
        nanoseconds: PropTypes.number,
        seconds: PropTypes.number
      })
    })
  }),
  clearTransaction: PropTypes.func,
  removeTransactionReq: PropTypes.func,
  removeTransactionSuccess: PropTypes.func
}

const mapStateToProps = ({transactions}) => ({
  selectedTransaction: transactions.selectedTransaction
});

const mapDispatchToProps = dispatch => bindActionCreators(transactionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeletionDialog);
