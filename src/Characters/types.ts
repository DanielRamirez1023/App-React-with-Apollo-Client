export interface typeCharacter {
  id: number;
  name: string;
  image: string;
}

export interface typeCharacterInfo {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  created: string;
}

export const initialState = {
  id: 0,
  image: "",
  name: "",
};
