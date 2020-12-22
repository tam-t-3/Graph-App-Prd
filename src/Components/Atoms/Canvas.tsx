import React, {　useEffect, useRef　} from 'react';

function CanvasGraphs(props: any) {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;

    return canvas.getContext('2d');
  };

  console.log(props.population);//渡ってきた
  console.log( typeof props.population);
   
  useEffect(() => {
    const stringDatas = ["126702133", "126451398", "126168156", "125853035", "125507472"];
    console.log(stringDatas);

    // const numberDatas = stringDatas.map(function (element: any) { return Number(element); });
    // console.log(numberDatas);
    
    const datas = [126702133, 126451398, 126168156, 125853035, 125507472];
    // const dats = {配列を受け取る}
    const yMax = Math.max.apply({}, datas);
    console.log(yMax);
    //window.onload = function() {};
    const cv1: any = document.getElementById('cvs1');
    const ctx: CanvasRenderingContext2D = getContext();
    //if (!cv1||!cv1.getContext) { return false;}
    const spcW = 50;
    const spcH = 50;
    const groundW = cv1.getAttribute("width")-spcW; //グラフ領域
    const groundH = cv1.getAttribute("height")-spcH;
    const groundX0 = spcW;
    const groundY0 = groundH;
    const pichX = groundW/datas.length;

    const DmYMx = Math.pow(10, Math.ceil(Math.log(yMax)/Math.log(10)));
    const cnstH: any = 210/DmYMx; 
    //上記2行で目盛りを相対的に変更しているが詳細不明

    const pichH: any = DmYMx/4;

    ctx.beginPath();
    ctx.save();
    
    //タイトル描画
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font ="12px, Arial";
    ctx.fillStyle = "rgb(0, 0, 180)";
    ctx.fillText('地域名', groundX0-10+0.5*groundW, 5);
    ctx.restore();
    ctx.save();

    //X軸描画
    ctx.textAlign = "center";
    ctx.textBaseline ="top";
    ctx.strokeStyle ="rgb(0, 0, 0)";
    ctx.moveTo( groundX0, groundY0);
    ctx.lineTo( groundX0 + groundW -20, groundY0 );

    for (let i: any = 0; i < groundW/pichX; i++) {
      ctx.moveTo( groundX0 + i * pichX, groundY0);
      ctx.lineTo(groundX0 + i * pichX, groundY0 - 5);
      ctx.fillText(i, groundX0 + i * pichX, groundY0 + 2);
    }

    //Y軸描画
    ctx.moveTo( groundX0, groundY0);
    ctx.lineTo( groundX0, 25);
    ctx.textAlign = "end";
    ctx.textBaseline = "middle";

    for (let i: any = 0; i < groundH/pichH/cnstH -1; i++) {
      ctx.moveTo( groundX0, groundY0 - i * pichH * cnstH );
      ctx.lineTo( groundX0 + 5, groundY0 - i * pichH * cnstH);
      // ctx.fillText(i * pichH, groundX0 - 3, groundY0 - i * pichH * cnstH );
      //上記コメントアウトの行でエラーが発生、pichHがstringsだから発生の可能性
    };
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.beginPath();

    //line
    ctx.fillStyle = "rgb(0, 180, 0)";
    ctx.strokeStyle = "rgb(0, 180, 0)";

    for (let i = 0; i < datas.length; i++) {
      ctx.moveTo(groundX0 + i * pichX, groundY0 - cnstH * datas[i]);
      if (i!=0) { ctx.lineTo(groundX0 + (i - 1) * pichX, groundY0 - cnstH * datas[i -1]);}
      ctx.fillRect(groundX0 + i * pichX - 2, groundY0 - cnstH * datas[i] - 2, 4, 4);
      ctx.textBaseline = "bottom";
      ctx.textAlign = "center";
      // ctx.fillText(datas[i], groundX0 + i * pichX, groundY0 - cnstH * datas[i]); 
      //datas[i]をstringsにする？
      //上記コメントアウトの行でエラーが発生、pichHがstringsだから発生の可能性
    }
      ctx.stroke();
      ctx.restore();
    } // end of onload? ---
    )
  
    return (
      <div>
        <canvas id="cvs1" width="300" height="300" className="canvas" ref={canvasRef} />
      </div>
    )
}

export default CanvasGraphs;