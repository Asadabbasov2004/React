import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ContainerGallery = () => {
   let a = "food"
   const [query,Setquery]= useState('menu')
   let [num,Setnum] = useState(1)
   let [max,Setmax] = useState(0)
    const API_KEY = 't76atBvIlKcpxah7bmMQM5aJNH5s0XNHTgZDfCQTgtiD4luGAvnacUD0';
    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(`https://api.pexels.com/v1/search?query={${query}}&per_page=12&page=${num}`, {
            headers: {
                Authorization: API_KEY
            }
        }).then(res => {
            console.log(res);
            Setmax(Math.ceil(res.data.total_results/12))
            setImage(res.data.photos)
            // console.log(max);
        })
    }, [query,num,max])
   const[changecolor,setChangecolor]=useState(false)
    const handleclick =()=>{
        setChangecolor(!changecolor)
    }
    const all = ()=>{
        Setquery('menu')
    } 
    const fruits=()=>{
        Setquery('fruits')
    }
    const dinner=()=>{
        Setquery('dinner')
    }
    const snack=()=>{
        Setquery('snack')
    }
    const starters=()=>{
        Setquery('starters')
    }
    const dessert=()=>{
        Setquery('dessert')
    }
    const drink=()=>{
        Setquery('drink')
    }
    const prev=()=>{
        if(num==1){
            num=max
            Setnum(num)
        }else{
        num=num-1
        Setnum(num)
        }
    }
    const firstpage=()=>{
        num=1
        Setnum(num)
    }
    const next=()=>{
        if(num==max){
        num=1
        Setnum(num)
        }else{
            num=num+1
            Setnum(num)
        }
    }
    return (
        <section className='ContainerGallery'>
            <div className='catagory'>
                <button onClick={all} >All</button>
                <button onClick={()=>{
                    fruits()
                    handleclick()
                }} className={`button ${(changecolor === true)?'black':'white'}`}>Fruits</button>
                <button  onClick={()=>{
                    dinner()
                    handleclick()
                }}  className={`button ${(changecolor === true)?'black':'white'}`}>Dinner</button>
                <button  onClick={snack}>Snack</button>
                <button  onClick={starters}> Starters</button>
                <button onClick={dessert}>Dessert</button>
                <button onClick={drink} >Drink</button>

            </div>
            {
                image.map(x=>{
                    return( <div key={x.id} className='container-img' style={{backgroundImage:`url(${x.src.large})`}}>
                    </div>)
                })
            }
            
            <div className='prev-next w-100 '>
            <button className='prev ' onClick={prev} >
            <i className="fa-solid fa-angles-left"></i>
            </button>
            <button className='first' onClick={firstpage}>
                1
            </button>
            <button className='next' onClick={next}>
            <i className="fa-solid fa-angles-right"></i>
            </button>
            </div>
        </section>
    );
}

export default ContainerGallery;
