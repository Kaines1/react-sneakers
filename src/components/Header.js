function Header () {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} className="mr-15" src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase"> React Sneakers </h3>
            <p className="opacity-5"> Магазин лучших кроссовок </p>
          </div>
        </div>
        <ul className="d-flex mt-10">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span className="ml-15"> 1205 руб. </span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
    )
}

export default Header;