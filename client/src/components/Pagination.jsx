
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Pagination = ({ pages, setCurrentPage }) => {
  
    

    const numberOfPages =[];

    for(let i =1 ; i <=pages; i++){
        numberOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);  //current active Button

    //Array of buttons what we are see on page
    const [arrOfCurrBtn ,setArrOfCurrBtn] = useState([]);

  
    const handlePageChange = (newPage) => {
        setCurrentButton(newPage);
        console.log("new page " , newPage)  
    };
  
    useEffect(() => {
      let tempNumberOfPages = [...arrOfCurrBtn];
  
      let dotsInitial ='...'
        let dotLeft = '...'
        let dotRight = '...'

        if(numberOfPages.length <6){
            tempNumberOfPages = numberOfPages;
        }

        else if(currentButton >=1 && currentButton <=3){
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial ,numberOfPages.length]
        }

        else if(currentButton === 4){
            const sliced =  numberOfPages.slice(0,5);
            tempNumberOfPages = [...sliced ,dotsInitial, numberOfPages.length]
        }

        else if(currentButton >4 && currentButton < numberOfPages.length -2){
            const sliced1 = numberOfPages.slice(currentButton-2, currentButton);
            const sliced2 =  numberOfPages.slice(currentButton, currentButton+1);
            tempNumberOfPages= ([1, dotLeft, ...sliced1 , ...sliced2 , dotRight , numberOfPages.length])
        }

        else if( currentButton > numberOfPages.length -3){
            const sliced = numberOfPages.slice(numberOfPages.length -4);
            tempNumberOfPages = [1,dotLeft, ...sliced];
        }

        else if(currentButton === dotsInitial){
            setCurrentButton(arrOfCurrBtn[arrOfCurrBtn.length-3] + 1)
        }
        
        else if(currentButton === dotRight){
            setCurrentButton(arrOfCurrBtn[3] + 2)
        }
        else if(currentButton === dotLeft){
            setCurrentButton(arrOfCurrBtn[3] - 2)
        }
  
      setArrOfCurrBtn(tempNumberOfPages);
      setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage]);
  
    // ... (existing code)
  
    return (
    
      <div className="pagination-container mb-5 mt-6">
        {/* ... (existing code) */}
        <Link to="" 
                  className={`flex justify-center items-center text-black h-10 w-10 border border-gray-300 cursor-pointer transition duration-200 hover:bg-gray-300 ${currentButton === 1 ? 'disabled:' : ''}`}
                  onClick={() => setCurrentButton(prev => (prev<=1 ? prev :prev-1))}
            >
                Prev
        </Link>

        {
          arrOfCurrBtn.map((item, index) => (
            <Link
              to=""
              key={index}
              className={`flex justify-center items-center text-black h-10 w-10 border border-gray-300 cursor-pointer transition duration-200 hover:bg-gray-300 ${
                currentButton === item ? "active:" : ""
              }`}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </Link>
          ))
        }
        {/* ... (existing code) */}
        <Link to=""
                  className={`flex justify-center items-center text-black h-10 w-10 border border-gray-300 cursor-pointer transition duration-200 hover:bg-gray-300 ${currentButton === numberOfPages.length ? 'disabled:' : ''}`}
                  onClick={() => setCurrentButton(next => (next >= numberOfPages.length ? next : next+1))}
            >
                Next
            </Link>

            
      </div>
      
      
    );
  };
  
  export default Pagination;
  