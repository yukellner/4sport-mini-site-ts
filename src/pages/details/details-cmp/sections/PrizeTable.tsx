import React from "react";
import {IPrize} from "../../../../models/Prize";

export const PrizeTable: React.FC<{ prizes: IPrize[]; gender: string; }> = ({ prizes, gender }) => {
    return (
        <div className="resaluts-container">
            <>
                <table className={'pricesTable'} style={{direction: 'rtl', border: 'none',  borderCollapse: 'collapse', float: 'right'}}>
                    <thead>
                    <th>
                        <h3 style={{fontSize: '30px', float: 'right'}}>{gender === 'M' ? 'גברים' : 'נשים'}</h3>
                    </th>
                    </thead>
                    <tbody>
                        {prizes?.map(prize =>
                            <tr style={{direction: 'rtl'}} key={`${prize.nis}-${prize.place}`}>
                                {
                                    prize.nis && <>
                                        <td className={'pricesTd'} style={{direction: 'rtl', padding: '8px'}}>{'מקום ' + (prize.place)}</td>
                                        <td className={'pricesTd'} style={{direction: 'rtl', padding: '8px'}}>₪{prize.nis}</td>
                                    </>
                                }
                            </tr>
                        )}
                    </tbody>
                </table>
            </>

        </div >
    )
}