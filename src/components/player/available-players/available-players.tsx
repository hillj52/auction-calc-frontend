import { Player, Position } from '../../../store';
import PlayerList from '../player-list/player-list';
import PlayerSearchBar from '../player-search-bar/player-search-bar';

interface AvailablePlayerProps {
  players: Player[];
}

const AvailablePlayers: React.FC<AvailablePlayerProps> = ({ players }) => (
  <>
    <PlayerSearchBar />
    {Object.keys(Position).map(position => (<PlayerList
      key={position}
      position={position} 
      players={players.filter(player => (player.position === position && !player.drafted))} 
    />))}
  </>
);

export default AvailablePlayers;