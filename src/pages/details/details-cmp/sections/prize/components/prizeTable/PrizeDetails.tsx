import "./PrizeDetails.scss"
import React from "react";
import {IPrize} from "../../../../../../../models/Prize";
export const PrizeDetails:React.FC<{prizes: IPrize[],gender?:string}>=({prizes,gender="m"})=>{
    return <div style={{display:"flex",justifyContent:"center"}}>
        <table className={'pricesTable'} style={{direction: 'rtl', border: 'none',  borderCollapse: 'collapse', float: 'right'}}>
            <thead>
            <th style={{fontSize: '30px'}}>מיקום</th>
            <th style={{fontSize: '30px'}}>גברים</th>
            <th style={{fontSize: '30px'}}>נשים</th>
            </thead>
            <tbody>
            {prizes?.map(prize =>
                <tr style={{direction: 'rtl'}} key={`${prize.nis}-${prize.place}`}>
                    {
                        prize.nis && <>
                            <td className={'pricesTd'} style={{direction: 'rtl', padding: '8px'}}>{ (prize.place)}</td>
                            <td className={'pricesTd'} style={{direction: 'rtl', padding: '8px'}}>₪{prize.nis}</td>
                            <td className={'pricesTd'} style={{direction: 'rtl', padding: '8px'}}>₪{prize.nis}</td>
                        </>
                    }
                </tr>
            )}

            </tbody>
        </table>
    </div>
}