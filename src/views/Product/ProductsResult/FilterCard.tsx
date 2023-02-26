import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterListIcon from '@mui/icons-material/FilterList';
import Checkbox from '@mui/material/Checkbox';


const FilterProduct = () => {
    return (
        <div className="filter-card">
            <p className="title font-semibold text-lg">Filter</p>
            {/* <FilterListIcon className='filter-button'/> */}

            <div className="filters">

            <p className="font-medium text-sm">Brand</p>
            <FormGroup>
                <FormControlLabel control={<Checkbox size="small"/>} label="Brand 1" />
                <FormControlLabel control={<Checkbox size="small"/>} label="Brand 2" />
            </FormGroup>
            <p className="font-medium text-sm">Category</p>
            <FormGroup>
                <FormControlLabel control={<Checkbox size="small"/>} label="category 1" />
                <FormControlLabel control={<Checkbox size="small"/>} label="category 2" />
                <FormControlLabel control={<Checkbox size="small"/>} label="category 3" />
            </FormGroup>
            <p className="font-medium text-sm">Price</p>
            <FormGroup>
                <FormControlLabel control={<Checkbox size="small"/>} label="<100$" />
                <FormControlLabel control={<Checkbox size="small"/>} label="100$ - 199$" />
                <FormControlLabel control={<Checkbox size="small"/>} label="199$ - 299$" />
            </FormGroup>
            </div>
        </div>

    )
}

export default FilterProduct