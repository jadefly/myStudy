import i18n from '@/locales/index';
import * as tableState from '@/common/dictionary/pos-order-table-state';

export default () => ([{ // 退单
  id: '179',
  name: 'revoke',
  hotKey: '-',
  text: i18n.t('Dict.Btn.Chargeback'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY, tableState.PRE_PAY],
}, { // 赠单
  id: '213',
  name: 'give',
  hotKey: 'F1',
  text: i18n.t('Dict.Btn.Give'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY, tableState.PRE_PAY],
}, { // 催单
  id: '180',
  name: 'hasten',
  hotKey: 'F2',
  text: i18n.t('Dict.Btn.Hasten'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY, tableState.PRE_PAY, tableState.LOCK, tableState.CHECK_BILL],
}, { // 起菜
  id: '907',
  name: 'serving',
  hotKey: 'F3',
  text: i18n.t('Dict.Btn.Serving'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY, tableState.PRE_PAY, tableState.LOCK, tableState.CHECK_BILL],
}, { // 上菜
  id: '1158',
  name: 'served',
  hotKey: 'F4',
  text: i18n.t('Dict.Btn.Served'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY, tableState.PRE_PAY, tableState.LOCK, tableState.CHECK_BILL],
}, { // 单品转台
  id: '197',
  name: 'transfer',
  hotKey: '',
  text: i18n.t('Dict.Btn.Transfer'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY],
}, { // 品项变价
  id: '196',
  name: 'changePrice',
  hotKey: '',
  text: i18n.t('Dict.Btn.ChangePrice'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY],
}, { // 称重确认
  id: '925',
  name: 'confirmWeight',
  hotKey: 'F5',
  text: i18n.t('Dict.Btn.ConfirmWeight'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY, tableState.PRE_PAY],
}, { // 核对单据
  id: '190',
  name: 'checkingBills',
  hotKey: 'F6',
  text: i18n.t('Dict.Btn.CheckingBills'),
  disabled: false,
  isShow: true,
  allowState: [
    tableState.OCCUPY,
    tableState.CHECK_BILL,
    tableState.PRE_PAY,
    tableState.LOCK,
  ],
}, { // 打印客单
  id: '191',
  name: 'printGuestList',
  hotKey: 'F9',
  text: i18n.t('Dict.Btn.PrintGuestList'),
  disabled: false,
  isShow: true,
  allowState: [
    tableState.OCCUPY,
    tableState.CHECK_BILL,
    tableState.PRE_PAY,
    tableState.LOCK,
  ],
}, { // 批量操作
  name: 'batchOperation',
  hotKey: '',
  text: i18n.t('Dict.Btn.BatchOperation'),
  disabled: false,
  isShow: true,
  allowState: [
    tableState.OCCUPY,
    tableState.PRE_PAY,
    tableState.LOCK,
    tableState.BOOKING,
  ],
}, { // 账单查询
  name: 'billQuery',
  hotKey: '',
  text: i18n.t('Dict.Btn.BillQuery'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY, tableState.CHECK_BILL],
}, { // 验证会员
  id: '995',
  name: 'verifiedMember',
  hotKey: '',
  text: i18n.t('Dict.Btn.VerifiedMember'),
  disabled: false,
  isShow: true,
  allowState: [tableState.OCCUPY],
}]);