import ListProvider from "./listProvider.jsx";
import ListHead from "./listhead.jsx";
import ListContent from "./listcontent.jsx";

function ReducerContext() {
    return (
        <>
            <ListProvider>
                <ListHead/>
                <ListContent/>
            </ListProvider>
        </>
    )
}

export default ReducerContext