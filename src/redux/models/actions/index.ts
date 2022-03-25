import CharacterAction from './character';
import EpisodeAction from './episode';
import LocationAction from './location';

type Action = CharacterAction & LocationAction | EpisodeAction;

export default Action;
