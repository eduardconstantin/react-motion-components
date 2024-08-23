export type ContentWrapperProps = {
  sections: { id: string; key: string }[];
};

export type Section = {
  id: string;
  key: string;
};

export type Props = {
  sections: Section[];
  section: string;
};
