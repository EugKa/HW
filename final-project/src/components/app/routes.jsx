import { About } from "../about/about"
import { Book } from "../book/book"
import { Footer } from "../footer/footer"
import { Home } from "../home/home"
import { Plans } from "../plans/plans"
import { Studio } from "../studio/studio"
import { Traning } from "../traning/traning"
import { Winnings } from "../winnings/winnings"


export const ROUTES_URL = {
    DEFAULT: '/',
    BOOK: '/book',
    PLANS: '/plans'
}

export const routes = [
    {  
        path: ROUTES_URL.DEFAULT,
        title: 'HOME',
        name: 'home',
        isScrolled:true,
        // render:() => <Home />
    },
    {   
        path: ROUTES_URL.DEFAULT,
        title: 'TRANING',
        name: 'traning',
        isScrolled:true,
        // render:() => <Traning/>
    },
    {   

        path: ROUTES_URL.DEFAULT,

        title: 'ABOUT',
        name: 'about',
        isScrolled:true,
        // render:() => <About/>
    },
    {   
        path: ROUTES_URL.DEFAULT,
        title: 'WINNINGS',
        name: 'winnings',
        isScrolled:true,
        // render:() => <Winnings/>
    },
    {
        path: ROUTES_URL.DEFAULT,
        title: 'STUDIO',
        name: 'studio',
        isScrolled:true,
        // render:() => <Studio/>
    },
    {
        path: ROUTES_URL.BOOK,
        title: 'BOOK',
        // render:() => <Book/>
    },
    {
        path: ROUTES_URL.PLANS,
        title: 'PLANS',
        // render:() => <Plans/>
    },
    {   
        path: ROUTES_URL.DEFAULT,
        title: 'CONTACT',
        name: 'footer',
        isScrolled:true,
    },

]
    

