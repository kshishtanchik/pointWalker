import React from 'react'

export const Point=({point,user,action})=> {
        const {xPos, yPos,id} = point
        const style={
                position: "absolute",
                left: xPos,
                top: yPos
        }
        // style={{width: 10+'rem'}}
        return (
            <div className="point" style={style}>
                    {id}. {JSON.stringify({xPos,yPos})}({user.name})<span style={{cursor:"pointer"}} onClick={action}>&times;</span>
            </div>
        )
}
