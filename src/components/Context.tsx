import React, { createContext, useState } from "react";

interface AnimalsDto {
  name: String;
  type: String;
  breed: String;
  old: Number;
  status: String;
  image: String;
  description: String;
}

type ShelterData = {
  Admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  animalsInShelter: AnimalsDto[];
  setAnimalsInShelter: React.Dispatch<React.SetStateAction<AnimalsDto[]>>;
  filterOption: object;
  setFilterOption: React.Dispatch<
    React.SetStateAction<{
      Status: string;
      Type: string;
    }>
  >;
  changedOptions: AnimalsDto | undefined;
  setChangedOptions: React.Dispatch<
    React.SetStateAction<AnimalsDto | undefined>
  >;
  sortNewsByDate: (array: any) => any;
  neededDonations: {
    type: string;
    value: string;
    description: string;
  }[];
  setNeededDonations: React.Dispatch<
    React.SetStateAction<
      {
        type: string;
        value: string;
        description: string;
      }[]
    >
  >;
  givenDonations: {
    type: string;
    value: string;
    description: string;
  }[];
  setGivenDonations: React.Dispatch<
    React.SetStateAction<
      {
        type: string;
        value: string;
        description: string;
      }[]
    >
  >;
  completedDonations: {
    type: string;
    value: string;
    description: string;
  }[];
  setCompletedDonations: React.Dispatch<
    React.SetStateAction<
      {
        type: string;
        value: string;
        description: string;
      }[]
    >
  >;
  cardIds: any[];
  setCardIds: React.Dispatch<React.SetStateAction<never[]>>;
  takeAnimalsIds: (animals: any) => void;
  createdNews: {
    title: string;
    text: string;
    important: boolean;
    date: string;
  };
  setCreatedNews: React.Dispatch<
    React.SetStateAction<{
      title: string;
      text: string;
      important: boolean;
      date: string;
    }>
  >;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ShelterContext = createContext<ShelterData>({} as ShelterData);

const ShelterContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [Admin, setAdmin] = useState(false);
  const [animalsInShelter, setAnimalsInShelter] = useState<AnimalsDto[]>([]);
  const [filterOption, setFilterOption] = useState({
    Status: "All",
    Type: "All",
  });
  const [changedOptions, setChangedOptions] = useState<AnimalsDto | undefined>(
    undefined
  );

  const takeAnimalsIds = (animals: any) => {
    let newAnimalIds = animals.map((animal: any) => {
      return animal.id;
    });
    setCardIds(newAnimalIds);
  };

  const [cardIds, setCardIds] = useState([]);

  const [editable, setEditable] = useState(false);

  const sortNewsByDate = (array: any) => {
    function sortFunction(a: any, b: any) {
      const [aDay, aMonth, aYear] = a.date.split(".");
      const [bDay, bMonth, bYear] = b.date.split(".");
      const dateA = new Date(`${aMonth}/${aDay}/${aYear}`).getTime();
      const dateB = new Date(`${bMonth}/${bDay}/${bYear}`).getTime();
      return dateA < dateB ? 1 : -1;
    }
    return array.sort(sortFunction);
  };

  const [neededDonations, setNeededDonations] = useState([
    {
      type: "",
      value: "",
      description: "",
    },
  ]);
  const [givenDonations, setGivenDonations] = useState([
    {
      type: "",
      value: "",
      description: "",
    },
  ]);
  const [completedDonations, setCompletedDonations] = useState([
    {
      type: "",
      value: "",
      description: "",
    },
  ]);

  const [createdNews, setCreatedNews] = useState({
    title: "",
    text: "",
    important: false,
    date: "",
  });

  return (
    <ShelterContext.Provider
      value={{
        Admin,
        setAdmin,
        animalsInShelter,
        setAnimalsInShelter,
        filterOption,
        setFilterOption,
        changedOptions,
        setChangedOptions,
        sortNewsByDate,
        neededDonations,
        setNeededDonations,
        givenDonations,
        setGivenDonations,
        completedDonations,
        setCompletedDonations,
        cardIds,
        setCardIds,
        takeAnimalsIds,
        createdNews,
        setCreatedNews,
        editable,
        setEditable,
      }}
    >
      {props.children}
    </ShelterContext.Provider>
  );
};

export default ShelterContextProvider;
