import React from 'react'

function Card({userName}) {
  return (
    <div
      className="flex flex-col rounded-xl  p-4"
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="150"
          height="150"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col  rounded-b-xl py-1 ">
        <div className="flex justify-between">
          <h3 className="font-RubikBold ">Bored ape nft accidental</h3>
          <h3 className="font-bold font-RubikBold">Price</h3>
        </div>
        <div className="flex  justify-between font-mono">
          <p>{userName}</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  )
}

export default Card
