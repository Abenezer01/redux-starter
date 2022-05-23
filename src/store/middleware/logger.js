// SNA
const logger=params=>store=>next=>action=>{
    next(action)
    // console.log('params',params)
    // console.log('store',store)
    // console.log('action',action)
    // console.log('next',next)
}
export default logger