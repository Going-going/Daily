const https = require('https')
const qs = require('querystring')

const param = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': 'ao4NM5AspR2trOeowz40Kfku',
    'client_secret': 'suHcbcHVIkZ9tklzABkt2rM9sHqaQUoL'
})

https.get({
    hostname: 'aip.baidubce.com',
    path: '/oauth/2.0/token?' + param,
    agent: false
}, function (res) {
    res.pipe(process.stdout)
})
/* 输出结果
{
    "access_token":"24.e1cad765bfa9aac3cdf4c02cb93f6f05.2592000.1530670674.282335-11321255",
    "session_key":"9mzdXvSjhRKfVh59DGIst4oGS6l6jh4jAFdsUMMF6PK\/5KSRPvgx2pvCsCcHSEOx4tJh+FkguBvNRC7XvtKkUkqRrFrcFg==",
    "scope":"public vis-ocr_ocr brain_ocr_scope brain_ocr_general brain_ocr_general_basic brain_ocr_general_enhanced vis-ocr_business_license brain_ocr_webimage brain_all_scope brain_ocr_idcard brain_ocr_driving_license brain_ocr_vehicle_license vis-ocr_plate_number brain_solution brain_ocr_plate_number brain_ocr_accurate brain_ocr_accurate_basic brain_ocr_receipt brain_ocr_business_license brain_solution_iocr wise_adapt lebo_resource_base lightservice_public hetu_basic lightcms_map_poi kaidian_kaidian ApsMisTest_Test\u6743\u9650 vis-classify_flower lpq_\u5f00\u653e cop_helloScope ApsMis_fangdi_permission smartapp_snsapi_base iop_autocar",
    "refresh_token":"25.5dd1581cceeb79a060a91d108c904194.315360000.1843438674.282335-11321255",
    "session_secret":"ee4a69e677a2e9156f5abdbef1703ef8",
    "expires_in":2592000
}
*/