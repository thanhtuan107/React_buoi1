import Card from './Card';
function listCard(){
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default listCard;