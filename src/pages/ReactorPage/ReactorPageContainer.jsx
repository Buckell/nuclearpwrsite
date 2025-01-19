import styled from "styled-components";


export default styled.div`
    padding-top: 100px;
    
    .reactor {
        position: relative;
        width: 1000px;
        z-index: 0;
        margin: 100px 0 100px 20px;
        padding-right: 350px;

        .messageBox {
            position: absolute;
            right: 20px;
            top: 210px;
            background-color: #033220;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 250px;
            height: 300px;
            
            p {
                margin: 10px;
            }
            
            h1 {
                padding: 10px 0 0 0;
                margin: 30px 10px 10px 10px;
            }
        }
        
        .messageBox2 {
            position: absolute;
            right: 20px;
            top: 10px;
            background-color: #033220;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 250px;
            height: 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            #p {
                font-size: 12px;
                padding: 0;
                margin: 0;
            }

            #p2 {
                font-size: 36px;
                font-weight: bold;
                padding: 0;
                margin: 0;
                
                font-family: 'Consolas', monospace;
            }
            
            .hdiv {
                display: block;
                background: white;
                width: 100%;
                height: 1px;
            }
        }

        .messageBox3 {
            position: absolute;
            right: 20px;
            top: 110px;
            background-color: #033220;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 250px;
            height: 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            #p {
                font-size: 12px;
                padding: 0;
                margin: 0;
            }

            #p2 {
                font-size: 36px;
                font-weight: bold;
                padding: 0;
                margin: 0;

                font-family: 'Consolas', monospace;
            }

            .hdiv {
                display: block;
                background: white;
                width: 100%;
                height: 1px;
            }

        }
        
    }
    
    .Buttons {
        
        button {
            //padding: 5px 10px;
            background: black;
            color: white;
            font-family: 'Inter', sans-serif;
            border: none;
        }
    }
    
    .button1{
        position: absolute;
        top: 270px;
        left: 118px;
        transform: translate(-50%, -50%);
        padding: 7px 10px;
    }
    .button2{
        position: absolute;
        top: 160px;
        left: 118px;
        transform: translate(-50%, -50%);
        padding: 5px 15px;
    }
    .button3{
        position: absolute;
        top: 185px;
        left: 288px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
    }
    .button4{
        position: absolute;
        top: 385px;
        left: 215px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
    }
    .button5{
        position: absolute;
        top: 235px;
        left: 400px;
        transform: translate(-50%, -50%);
        padding: 5px 5px;
    }
    .button6{
        position: absolute;
        top: 260px;
        left: 500px;
        transform: translate(-50%, -50%);
        padding: 5px 10px;
    }
    .button7{
        position: absolute;
        top: 167px;
        left: 653px;
        transform: translate(-50%, -50%);
        padding: 5px 15px;
    }
    .button8{
        position: absolute;
        top: 380px;
        left: 500px;
        transform: translate(-50%, -50%);
        padding: 5px 12px;
        
    }
    #Title{
        margin-top: -8px;
    }
    
`;