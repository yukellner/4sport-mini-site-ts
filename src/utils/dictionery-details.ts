export const detailsText ={
    time:` <h1>לוז אירוע</h1>

    
    
            {eventObj.heats.map(heat =>
                <tr key={heat.description}>
                    <td>{heat.description}</td>
                    <td>{heat.startHeat}</td>
                </tr>
            )}

        </tbody>
    </table>
    <h3>טקס סיום וחלוקת פרסים : 10:00</h3>
</div>`
}