import "./Viewer.css";
import {emotionList} from "../util";

const Viewer = ({content,emotionId}) => {
    const emotionItem = emotionList.find((it)=>it.id===emotionId);
    console.log(emotionItem);
  
    return (    
        <div className="Viewer">
            <h4>오늘의 감정</h4>
            <div className={["emotion_img_wrapper", `emotion_img_wrapper_${emotionId}`].join(" ")}>
                <img alt={emotionItem.name} src={emotionItem.img} />
                <div className="emotion_descript">{emotionItem.name}</div>
            </div>
            <div>{content}</div>
 
            <h4>오늘 하루는?</h4>   
            <div className="content_wrapper">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Viewer;
