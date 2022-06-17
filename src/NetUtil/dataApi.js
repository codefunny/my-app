// import {
//     Platform
// } from 'react-native';

// import {
//     NetWorkTool,
//     HYRNAppInfo,
//     DataCenter,
//     HYRNToast,
//     HYRNLog,
//   } from "@hyrn/kiwi-rn-sdk/lib";  

// import {DataCenter} from 'hy-rn-sdk/lib/modules/dataCenter';
// import GetAccompanyVipLevelProgressReq from '../../../jce/HUYA/HUYAGetAccompanyVipLevelProgressReq';
// import GetAccompanyVipLevelProgressRsp from '../../../jce/HUYA/HUYAGetAccompanyVipLevelProgressRsp';


// const BASE_URL = HYRNAppInfo.isTestEnv ? TEST_URL : PROD_URL;
// const BASE_MONEY_URL = HYRNAppInfo.isTestEnv ? MONEY_TEST_URL : MONEY_URL;
// const COMPLAY_URL = HYRNAppInfo.isTestEnv ? COMPLAY_URL_TEST : COMPLAY_URL_PRO;


// export default {
// 	getAccompanyVipLevelProgress : async function(cfg,strategy) {
// 		var req = new GetAccompanyVipLevelProgressReq();                        
// 		req.UserId = cfg.UserId;
// 		req.lUid = cfg.lUid;
//         var servant  = "accompanyui";
// 		var funcname = "getAccompanyVipLevelProgress";
// 		return await DataCenter.sendRequest({
// 			servant: servant,
// 			funcname: funcname,
// 			requestType : 0,
// 			request: req,
// 			rspClass: GetAccompanyVipLevelProgressRsp,
// 			needLog: false,
// 		}, strategy);
//     }
// }


// import DataCenter from 'hy-rn-sdk/lib/modules/dataCenter';

// import GetUserPetMountsListReq from '../jce/HUYA/HUYAGetUserPetMountsListReq';
// import GetUserPetMountsListRsp from '../jce/HUYA/HUYAGetUserPetMountsListRsp';
// import GetMountsActivityListReq from '../jce/HUYA/HUYAGetMountsActivityListReq';
// import GetMountsActivityListRsp from '../jce/HUYA/HUYAGetMountsActivityListRsp';
// import RideUserPetMountsReq from '../jce/HUYA/HUYARideUserPetMountsReq';
// import UserPetCommRsp from '../jce/HUYA/HUYAUserPetCommRsp';
// import UserId from '../jce/HUYA/HUYAUserId';

// import { HYRNUser } from '@hyrn/kiwi-rn-sdk/lib/modules/kiwiMoudle';
// import {
//   base64ToArrayBuffer,
//   arrayBufferToBase64,
//   createArrayBufferByWupReq,
//   getWupStructByArrayBuffer,
//   readWupObject,
// } from 'hy-rn-sdk/lib/wup/unitPacket';

// export default {
//   /**
//    * 查询用户坐骑列表
//    */
//   getUserPetMountsList: async function () {
//     const req = new GetUserPetMountsListReq();
//     const userId = await this.getHuyaUserId();
//     req.tId = userId;
//     req.lUid = userId.lUid;
//     req.iFromType = 0;
//     const servantName = 'wupui';
//     const funcName = 'getUserPetMountsList';
//     return await DataCenter.sendRequest(
//       {
//         servant: servantName,
//         funcname: funcName,
//         requestType: 0,
//         cacheKey: 'rn_wupui_getUserPetMountsList',
//         request: req,
//         rspClass: GetUserPetMountsListRsp,
//         needLog: true,
//       },
//       DataCenter.Strategy.NetOnly
//     );
//   },

//   /**
//    * 拉取坐骑活动下发列表
//    */
//   getMountsActivityList: async function () {
//     const req = new GetMountsActivityListReq();
//     req.tId = await this.getHuyaUserId();
//     const servantName = 'wupui';
//     const funcName = 'getMountsActivityList';
//     return await DataCenter.sendRequest(
//       {
//         servant: servantName,
//         funcname: funcName,
//         requestType: 0,
//         cacheKey: 'rn_wupui_getMountsActivityList',
//         request: req,
//         rspClass: GetMountsActivityListRsp,
//         needLog: true,
//       },
//       DataCenter.Strategy.NetOnly
//     );
//   },

//   /**
//    * 选中坐骑
//    * op 操作类型 0:选中 1:解除选中(解除选中可以不传lPetId)
//    */
//   rideUserPetMounts: async function (petId, op) {
//     const req = new RideUserPetMountsReq();
//     req.tId = await this.getHuyaUserId();
//     req.lPetId = petId;
//     req.iOp = op;
//     const servantName = 'wupui';
//     const funcName = 'rideUserPetMounts';
//     return await DataCenter.sendRequest(
//       {
//         servant: servantName,
//         funcname: funcName,
//         requestType: 0,
//         cacheKey: 'rn_wupui_rideUserPetMounts',
//         request: req,
//         rspClass: UserPetCommRsp,
//         needLog: true,
//       },
//       DataCenter.Strategy.NetOnly
//     );
//   },

//   getHuyaUserId: async function () {
//     const responseData = await HYRNUser.getHuyaUserId();
//     const responseBuf = base64ToArrayBuffer(responseData);
//     return readWupObject(responseBuf, UserId);
//   },
// };
