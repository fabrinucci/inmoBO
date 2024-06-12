export interface Properties {
  data: PropertyData[];
}

export interface PropertyData {
  property_id:      number;
  name:             string;
  slug:             string;
  operation_type:   string;
  property_type:    string;
  address:          string;
  price:            number;
  total_sq_m:       number;
  bedrooms:         number;
  bathrooms:        number;
  garage:           boolean;
  pool:             boolean;
  description:      string;
  photos:           string[];
  status:           string;
  publication_date: string;
  agent_id:         number;
}
