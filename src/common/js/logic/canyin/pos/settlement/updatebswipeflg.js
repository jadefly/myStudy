export const url = '/canyin/pos/settlement/updatebswipeflg';
export function trans(data) {
  return data.code === '1' ? {
    success: true,
    data,
  } : {
    success: false,
    errCode: data.errCode,
    msg: data.msg,
  };
}