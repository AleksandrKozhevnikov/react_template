import 'app/styles/index.scss'
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/ClassNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


export const App = () => {

    const {theme, toggleTheme} = useTheme()
      
    return (
            <div className={classNames(`app`, {}, [theme])}>
                <Navbar/>
                <AppRouter/>
                <button onClick={toggleTheme}>Переключить тему</button>
            </div>
    );
};
