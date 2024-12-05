import { NavLink, Outlet } from "react-router-dom";



interface RootLayerProps {
    
}

const RootLayer: React.FC<RootLayerProps> = () => {
    return (
        <div>
            <NavLink to="/" >Description</NavLink>
            <NavLink to="DataShow" >Description</NavLink>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayer;