var {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLScalarType } = require('graphql');
var GeoJSON = require('./GeoJSON');
var { PolygonObject } = require('graphql-geojson');

const db = require('../models');

const resolvers = {
    Coordinates: new GraphQLScalarType({
        name: 'Coordinates',
        description: 'A set of coordinates. x, y',
        parseValue(value) {
            return value;
        },
        serialize(value) {
            return value;
        },
        parseLiteral(ast) {
            return ast.value;
        },
    }),
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    }),
    geometry: new GraphQLObjectType({
        name: 'Geometry',
        fields: () => ({
            polygon: {
                type: PolygonObject,
                resolve: () => ({
                    type: String,
                    coordinates: String
                }),
            },
        }),
    }),
    Query: {
        hello: () => 'Hello world!',
        async getShape(root, { id }, { models }) {
            return models.Shape.findByPk(id)
        },
        async getProperty(root, { id }, { models }) {
            return models.Property.findByPk(id)
        },
        async getAllProperties(root, args, { models }) {
            return models.Property.findAll()
        },
        async getAllShapes(root, args, { models }) {
            return models.Shape.findAll()
        },
        async getProGeoWithLinestring(root, args, { models }) {
            let result = await db.sequelize.query(`SELECT propertyaddress_address,ST_ASTEXT(lng_lat)
                                                    FROM properties
                                                    WHERE MBRWITHIN(
                                                        lng_lat,
                                                        ST_ENVELOPE(
                                                            ST_GEOMFROMTEXT(
                                                                (:type :coordinates)
                                                            )
                                                        )
                                                    );`,
                {
                    replacements: {
                        type: args.where['type'],
                        coordinates: args.where['coordinates']
                    },
                    type: db.sequelize.QueryTypes.SELECT
                });
            return result;
        }
    },
    Shape: {
        async properties(properties) {
            return properties.getProperty()
        }
    },
    Property: {
        async shapes(shapes) {
            return shapes.getShape()
        }
    },
    Polygon: {
        type() {
            return 'Polygon';
        },
        coordinates(item) {
            // return [item.longitude, item.latitude];
            return item
        },
    }
};

module.exports = resolvers;