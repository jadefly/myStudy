export const url = '/canyin/desktop/bizpsreport/query';
export function trans(data) {
  return (data.success) ? {
    success: true,
    data,
  } : {
    success: false,
    errCode: data.errCode,
    msg: data.msg,
  };
}