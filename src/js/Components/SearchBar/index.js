import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    console.log("line 5", store);
    return {
        city: store.search.city
    };
}

export default connect(mapStoreToProps)(SearchBar);