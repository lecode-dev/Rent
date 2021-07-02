import classes from './menu.module.css'
const Menu = () => {
return (
    <div className = {classes.menu}>
        <button className = {classes.button}> Home </button>
        <button className ={classes.button}> Buy </button>
        <button className ={classes.button}> Sell </button>
        <button className ={classes.button}> Contact us</button>
    </div>
)

}

export default Menu