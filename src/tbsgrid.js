import { useEffect, useRef } from "react";

import { tbsGridConfigs } from "tbsgrid/dist/tbsgrid-configs.js";

import { TbsGrid as TbsGridComponent } from "tbsgrid";

import "./tbsgrid.css";

import { grid_data } from "./tbsgrid_data";

function TbsGrid() {
    useEffect(() => {
        const columns = [
              { name : "custcd"     , header: { text : "Code"          }, width : 100 }
            , { name : "usernm"     , header: { text : "Manager"       }, width : 100 }
            , { name : "custnm"     , header: { text : "Customer"      }, width : 100 }
            , { name : "bizno"      , header: { text : "Biz Number"    }, width : 100 }
            , { name : "ceo"        , header: { text : "ceo"           }, width : 100 }
            , { name : "tel"        , header: { text : "Telephone"     }, width : 100 }
            , { name : "email"      , header: { text : "E-Mail"        }, width : 100 }
            , { name : "saddr"      , header: { text : "Area"          }, width : 100 }
            , { name : "addr"       , header: { text : "Address"       }, width : 100 }
            , { name : "creditamt"  , header: { text : "Credit limit"  }, type : 'number', scale : '18,2' }
            , { name : "payamt_d"   , header: { text : "Other Payable" }, type : 'number', scale : '18,2' }
            , { name : "getamt_d"   , header: { text : "Accounts receivable"}, type : 'number', scale : '18,2' }
            , { name : "useyn"      , header: { text : "Use"           }, width : 60  }
            , { name : "custnote"   , header: { text : "note"          }, width : 100 }
        ];
        console.dir(tbsGridConfigs);
        const grid1 = new TbsGridComponent('grid1', tbsGridConfigs);
        const options = {};
        grid1.setGrid(columns, options);
        grid1.setData(grid_data);

        return () => {
            //grid1.destroy();
        };
    }, []);

    return <div id='grid1' style={{ height: "600px", width: "90%" }}></div>;
}

export default TbsGrid;
