import { ChangeEventHandler } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Input from '../../UI/input/input';
import classes from './player-search-bar.module.css';

const PlayerSearchBar: React.FC = () => {

  const { updatePlayerSearchTerm } = useActions()

  const { searchTerm } = useTypedSelector(({ players }) => players);

  const nameChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    updatePlayerSearchTerm(event.target.value);
  }

  return (
    <section className={classes.center}>
      <Input id='search' label='Search' value={searchTerm} type='text' onChange={nameChangeHandler} />
    </section>
  )
} 

export default PlayerSearchBar;