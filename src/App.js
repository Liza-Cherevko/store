


function App() {
  return (
    <div className="wrapper clear">
      <div className='overlay'>
      <div className='drawer'>
          <h2 className='mb-20'>Корзина</h2>
          
          <div className='items'>
          <div className='cartItem d-flex align-center mb-20' style={{backgroundImage:"url(/sneakers/1.jpg)"}}>
            <div className='cartItemImg' >
              
             </div>
            <div className='mr-20'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>1250ua</b>
            </div>
            <img className='remove-btn' src='/img/remove.svg' alt='remove' />
            </div>

            <div className='cartItem d-flex align-center mb-20' >
            <div className='cartItemImg' >
              
             </div>
            <div className='mr-20'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>1250ua</b>
            </div>
            <img className='remove-btn' src='/img/remove.svg' alt='remove' />
            </div>

            <div className='cartItem d-flex align-center mb-20'>
            <div className='cartItemImg' >
              
             </div>
            <div className='mr-20'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>1250ua</b>
            </div>
            <img className='remove-btn' src='/img/remove.svg' alt='remove' />
            </div>

        </div>
          <div className='cartTotalBlock'>
          <ul>
            <li >
              <span>Итого</span>
              <div></div>
              <b>64654Ua</b>
            </li>
            <li className='d-flex'>
              <span>Налог 5%</span>
              <div></div>
              <b>100ua</b>
            </li>
            </ul>
            <button> Оформить заказ</button>
    </div>
        </div>
      </div>




      <header className="d-flex justify-between p-40">
        <div className="d-flex align-center">
         
          <img width={30} height={40} src='/img/logo.png' alt=''/>
          <div>
          <h3 className="text-uppercase">React Sneakers</h3>
        <p >Магазин лучших кроссовок</p>
      </div>
        </div>
        <ul className="d-flex  align-center">
          <li> <img width={18} height={18} src='/img/basket.png' alt='bsk' /> </li>
          <li className="mr-30 "> <span>1205 ua</span> </li>
          <li> <img width={18} height={18} src='/img/profile.png' alt='profile' /> </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center  justify-between mb-40">
        <h1> Все кроссовки </h1>
        <div className="search-block ">
          <img className="mr-10" width={14} height={14} src='/img/search.png' alt='Search' />
          <input placeholder='Поиск...' />
        </div>
    </div>

        <div className="card-wrap d-flex flex-wrap">
          <div className="card">
            <div className='favorite'>
            <img src='/img/heart-unliked.svg' alt='unliked'/>
         </div>
          <img width={133} height={122} src='/img/sneakers/1.jpg' alt='first'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className=" d-flex flex-column" >
              <span className="uppercase price">Цена:</span>
              <b>12 364ua</b>
            </div>
            <button className="button"><img width={11} height={11} src='/img/btn-add.svg' alr='add'/> </button>
          </div>
          </div>
          
          <div className="card">
          <img width={133} height={122} src='/img/sneakers/2.jpg' alt='first'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className=" d-flex flex-column" >
              <span className="uppercase price">Цена:</span>
              <b>12 364ua</b>
            </div>
            <button className="button"><img width={11} height={11} src='/img/btn-add.svg' alr='add'/> </button>
          </div>
          </div>
          
          <div className="card">
          <img width={133} height={122} src='/img/sneakers/3.jpg' alt='first'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className=" d-flex flex-column" >
              <span className="uppercase price">Цена:</span>
              <b>12 364ua</b>
            </div>
            <button className="button"><img width={11} height={11} src='/img/btn-add.svg' alr='add'/> </button>
          </div>
          </div>
          
          <div className="card">
          <img width={133} height={122} src='/img/sneakers/4.jpg' alt='first'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className=" d-flex flex-column" >
              <span className="uppercase price">Цена:</span>
              <b>12 364ua</b>
            </div>
            <button className="button"><img width={11} height={11} src='/img/btn-add.svg' alr='add'/> </button>
          </div>
          </div>
          
          <div className="card">
          <img width={133} height={122} src='/img/sneakers/5.jpg' alt='first'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className=" d-flex flex-column" >
              <span className="uppercase price">Цена:</span>
              <b>12 364ua</b>
            </div>
            <button className="button"><img width={11} height={11} src='/img/btn-add.svg' alr='add'/> </button>
          </div>
        </div>
  </div>
        </div>
    </div>
  );
}

export default App;
