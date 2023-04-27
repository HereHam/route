import {useParams,useLocation} from 'react -router-dom';
export default function Posts(){
    const {id}=useParams();
    const urlstring=new URLSearchParams (useLocation().search);
    const name=urlstring.get("name");
    const surname=urlstring.get("surname");
    if(id==1) return (<>id: {id} iphone 13</>);
    if(id==2) return (<>id: {id} iphone 14</>);
    if(id) return (<>id: {id} no items</>);
    if(name && surname) return (<>
    Hello {name} {surname}, How are you?</>)
    return (<>
    Iphone 13 <br/>
    Iphone 14 <br/>
    </>)
}