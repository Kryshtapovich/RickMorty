import CharacterAction from "./character";
import EpisodeAction from "./episode";
import LocationAction from "./location";
import ScrollAction from "./scroll";

type Action = CharacterAction | LocationAction | EpisodeAction | ScrollAction;

export default Action;
