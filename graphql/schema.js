// 'use strict';

const schema = `
  scalar Date
  scalar Coordinates
  scalar geometry
  
  type Polygon {
    type: String!
    coordinates: Coordinates!
  }

  type Property {
    id: Int
    CensusFIPSPlaceCode: Int
    propertyaddress_address: String
    propertyaddress_Cart: String
    propertyaddress_city: String
    propertyaddress_DBP: Int
    propertyaddress_DPBC: Int
    propertyaddress_FIPS: Int
    propertyaddress_lng_lat: Coordinates
    propertyaddress_PLUS4: String
    propertyaddress_state: String
    propertyaddress_Zip: String
    ShapeId: Int
    propertyaddress_Addresskey: Int
    AreaBuilding: Int
    lot_acreage: Float
    AreaLotSF: Int
    currentsale_saleprice: Int
    currentsale_saledate: Date
    building_totalbaths: Int
    building_bedrooms: Int
    PropertyUseStandardized: Int
    building_yearbuilt: Int
    values_calculatedtotalvalue: Int
    currentdeed_mortgageamount: Int
    currentdeed_lendername: String
    currentdeed_mortgagedate: Date
    currentdeed_mortgageterm: Int
    currentdeed_mortgageduedate: Date
    currentdeed_secondmortgageamount: Int
    owneraddress_address: String
    owneraddress_Cart: String
    owneraddress_city: String
    owneraddress_Dpb: Int
    owneraddress_Dpbc: Int
    owneraddress_Fips: Int
    owneraddress_Plus4: Int
    owneraddress_State: String
    owneraddress_Zip: String
    owneraddress_contactMak: Int
    owneraddress_AddressKey: Int
    mdPropertyResults: String
    mdResults: String
    UnitsCount: Int
    calculatedimprovementvalue: Int
    calculatedlandvalue: Int
    TaxMarketImprovementsPerc: Int
    ContactBaseMAK: Int
    PropertyBaseMAK: Int
    owner_name: String
    owner_firstname: String
    owner_middlename: String
    owner_lastname: String
    owner_NameSuffix: String
    OwnerTypeDescription1: String
    ParcelID: Int
    UnifiedSchoolDistrictNameCode: Int
    UnifiedSchoolDistrictName: String
    Active: String
    Address: String
    Suite: String
    Urbanization: String
    City: String
    State: String
    MAUSAddressKey: Int
    ParsedRange: Int
    ParsedPreDir: String
    ParsedName: String
    ParsedSuffix: String
    ParsedPostDir: String
    ParsedSuiteName: String
    ParsedSuiteRange: String
    BaseMAK: Int
    AddressType: String
    RBDI: String
    lng_lat: Coordinates!
    Censuskey: String
    geolevel: String
    shapes: Shape
  }
  type Shape {
    id: Int!
    Address: String!
    Suite: String!
    Urbanization: String!
    City: String!
    State: String!
    Zip: String!
    Plus4: String!
    BaseMAK: Int!
    ShapeWKT: String!
    Test1: Int!
    properties: Property
  }
  
  type Query {
    hello: String
    getAllProperties: [Property!]!
    getAllShapes: [Shape!]!
    getShape(id: Int!): Shape
    getProperty(id: Int!): Property
    
    getProGeoWithLinestring(where: geometry): [Property]
  }
`;

module.exports = schema;