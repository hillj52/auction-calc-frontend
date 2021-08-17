import { MouseEvent } from 'react';
import Card from '../../UI/card/card';
import { Player } from '../../../store';
import classes from './player-card.module.css';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const PlayerCard: React.FC<Player> = ({ id, name, team, position, byeWeek, value }) => {

  const inflation = useTypedSelector(({players}) => players.inflation);

  const { setFeaturedPlayer } = useActions()

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFeaturedPlayer(id);
  }

  return (
    <Card 
      key={id}
      className={classes.player + ' ' + classes[position]} 
      onClick={clickHandler}
    >
      <div className={classes.name}>{name}</div>
      <div className={classes.team}>({team})</div>
      <div className={classes.position}>{position}</div>
      <div className={classes.bye}>Bye: {byeWeek}</div>
      <div className={classes.price}>Value: {value} Max Bid: {(value * inflation).toFixed(2)}</div>
    </Card>
  )
}

export default PlayerCard;