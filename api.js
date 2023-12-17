const apiRouter = require("express").Router();

apiRouter.post('/menu', function(req, res) {
   console.log(req.body);
   function response(){
            var now = new Date();     
            var year = now.getFullYear();
            var month = now.getMonth();
            var date = now.getDate();
            month += 1;
            month = String( month );
            date = String( date );
            if(month.length==1){
                month = "0" + month;
            }
            if(date.length == 1){
                date = "0" + date;
            }
            var total = year + month + date;       
            var result = Utils.getWebText("https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=b501eb8d00804ad98e3dbb4da694765e&Type=json&plndex=1&pSize=30&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010059&MLSV_YMD="+total, false,false).split("<body>")[1].split("</body>")[0];
            
            try{
                    
                calories = result.split("CAL_INFO\":\"")[1].split("\",\"NTR_INFO")[0];
                result = result.split("\",\"ORPLC")[0].split("\"DDISH_NM\":\"")[1].replace(/(<([^>]+)>)/g, "");
                result = result.replace(/amp;/gi, "");
                result = result.replace(/undefined/gi,"");
                result = result.replace(/\./gi, "");
                result = result.replace(/\*/gi, "");
                
                result = result.trim(); 
                result = result.replace(/^ +/gm,"");
 
                result = result.replace(/[0-9]/g, "");
                
 
            }
            catch(e){
                replier.reply("급식 정보가 없습니다");
            }
 
            result += "\n";
            result += "총 ";
            result += calories;
            replier.reply(result);
			}   
        }
 );
 
module.exports = apiRouter;
