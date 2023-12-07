import Menu from '../Menu';
import { ReactComponent as SearchIcon } from './SearchIcon.svg';

export default ()=>{
    return <div style={{
        position:'relative'
    }}><form style={{
        display:'flex',
        minWidth:'570px'
    }}>
        <input
        placeholder='search an album of your choice'
        style={{flex:1,
            borderRadius:'8px 0px 0px 8px',
            padding:'8px'
        }}
        />
<button style={{width:'66px',
    height:'48px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'0 8px 8px 0',
    padding:'8px'
    }}>
            <SearchIcon />
        </button>
    </form>
    <Menu data={[1,2,3]}/>
    </div>
}
