export const url = '/canyin/pos/itemsellout/itemselloutv2';

export function trans(data) {
  return (data.code === '1' && data.data && data.data.result === 1) ? {
    success: true,
    data: {
      msg: data.data.msg,
      reasonsJson: data.data.reasonsJson,
    },
  } : {
    success: false,
    errCode: data.errCode ? data.errCode : data.data.result,
    msg: data.msg ? data.msg : data.data.msg,
  };
}