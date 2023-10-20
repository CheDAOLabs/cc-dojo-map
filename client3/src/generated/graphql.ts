import { GraphQLClient } from 'graphql-request';
// @ts-ignore
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ContractAddress: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Enum: { input: any; output: any; }
  felt252: { input: any; output: any; }
  u8: { input: any; output: any; }
  u32: { input: any; output: any; }
  u128: { input: any; output: any; }
};

export type Entity = {
  __typename?: 'Entity';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  model_names?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  systemCall: SystemCall;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Event>;
};

export type Map = {
  __typename?: 'Map';
  affinity?: Maybe<Scalars['felt252']['output']>;
  doors1?: Maybe<Scalars['felt252']['output']>;
  doors2?: Maybe<Scalars['felt252']['output']>;
  doors3?: Maybe<Scalars['felt252']['output']>;
  dungeon_name1?: Maybe<Scalars['felt252']['output']>;
  dungeon_name2?: Maybe<Scalars['felt252']['output']>;
  dungeon_name3?: Maybe<Scalars['felt252']['output']>;
  dungeon_name4?: Maybe<Scalars['felt252']['output']>;
  dungeon_name5?: Maybe<Scalars['felt252']['output']>;
  entity?: Maybe<Entity>;
  environment?: Maybe<Scalars['u8']['output']>;
  layout1?: Maybe<Scalars['felt252']['output']>;
  layout2?: Maybe<Scalars['felt252']['output']>;
  layout3?: Maybe<Scalars['felt252']['output']>;
  legendary?: Maybe<Scalars['u8']['output']>;
  owner?: Maybe<Scalars['ContractAddress']['output']>;
  points1?: Maybe<Scalars['felt252']['output']>;
  points2?: Maybe<Scalars['felt252']['output']>;
  points3?: Maybe<Scalars['felt252']['output']>;
  size?: Maybe<Scalars['u8']['output']>;
  structure?: Maybe<Scalars['u8']['output']>;
  token_id?: Maybe<Scalars['u128']['output']>;
};

export type MapConnection = {
  __typename?: 'MapConnection';
  edges?: Maybe<Array<Maybe<MapEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MapEdge = {
  __typename?: 'MapEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Map>;
};

export type MapOrder = {
  direction: OrderDirection;
  field: MapOrderField;
};

export enum MapOrderField {
  Affinity = 'AFFINITY',
  Doors1 = 'DOORS1',
  Doors2 = 'DOORS2',
  Doors3 = 'DOORS3',
  DungeonName1 = 'DUNGEON_NAME1',
  DungeonName2 = 'DUNGEON_NAME2',
  DungeonName3 = 'DUNGEON_NAME3',
  DungeonName4 = 'DUNGEON_NAME4',
  DungeonName5 = 'DUNGEON_NAME5',
  Environment = 'ENVIRONMENT',
  Layout1 = 'LAYOUT1',
  Layout2 = 'LAYOUT2',
  Layout3 = 'LAYOUT3',
  Legendary = 'LEGENDARY',
  Owner = 'OWNER',
  Points1 = 'POINTS1',
  Points2 = 'POINTS2',
  Points3 = 'POINTS3',
  Size = 'SIZE',
  Structure = 'STRUCTURE',
  TokenId = 'TOKEN_ID'
}

export type MapWhereInput = {
  affinity?: InputMaybe<Scalars['felt252']['input']>;
  affinityEQ?: InputMaybe<Scalars['felt252']['input']>;
  affinityGT?: InputMaybe<Scalars['felt252']['input']>;
  affinityGTE?: InputMaybe<Scalars['felt252']['input']>;
  affinityLT?: InputMaybe<Scalars['felt252']['input']>;
  affinityLTE?: InputMaybe<Scalars['felt252']['input']>;
  affinityNEQ?: InputMaybe<Scalars['felt252']['input']>;
  doors1?: InputMaybe<Scalars['felt252']['input']>;
  doors1EQ?: InputMaybe<Scalars['felt252']['input']>;
  doors1GT?: InputMaybe<Scalars['felt252']['input']>;
  doors1GTE?: InputMaybe<Scalars['felt252']['input']>;
  doors1LT?: InputMaybe<Scalars['felt252']['input']>;
  doors1LTE?: InputMaybe<Scalars['felt252']['input']>;
  doors1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  doors2?: InputMaybe<Scalars['felt252']['input']>;
  doors2EQ?: InputMaybe<Scalars['felt252']['input']>;
  doors2GT?: InputMaybe<Scalars['felt252']['input']>;
  doors2GTE?: InputMaybe<Scalars['felt252']['input']>;
  doors2LT?: InputMaybe<Scalars['felt252']['input']>;
  doors2LTE?: InputMaybe<Scalars['felt252']['input']>;
  doors2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  doors3?: InputMaybe<Scalars['felt252']['input']>;
  doors3EQ?: InputMaybe<Scalars['felt252']['input']>;
  doors3GT?: InputMaybe<Scalars['felt252']['input']>;
  doors3GTE?: InputMaybe<Scalars['felt252']['input']>;
  doors3LT?: InputMaybe<Scalars['felt252']['input']>;
  doors3LTE?: InputMaybe<Scalars['felt252']['input']>;
  doors3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name4NEQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5EQ?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5GT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5GTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5LT?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5LTE?: InputMaybe<Scalars['felt252']['input']>;
  dungeon_name5NEQ?: InputMaybe<Scalars['felt252']['input']>;
  environment?: InputMaybe<Scalars['u8']['input']>;
  environmentEQ?: InputMaybe<Scalars['u8']['input']>;
  environmentGT?: InputMaybe<Scalars['u8']['input']>;
  environmentGTE?: InputMaybe<Scalars['u8']['input']>;
  environmentLT?: InputMaybe<Scalars['u8']['input']>;
  environmentLTE?: InputMaybe<Scalars['u8']['input']>;
  environmentNEQ?: InputMaybe<Scalars['u8']['input']>;
  layout1?: InputMaybe<Scalars['felt252']['input']>;
  layout1EQ?: InputMaybe<Scalars['felt252']['input']>;
  layout1GT?: InputMaybe<Scalars['felt252']['input']>;
  layout1GTE?: InputMaybe<Scalars['felt252']['input']>;
  layout1LT?: InputMaybe<Scalars['felt252']['input']>;
  layout1LTE?: InputMaybe<Scalars['felt252']['input']>;
  layout1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  layout2?: InputMaybe<Scalars['felt252']['input']>;
  layout2EQ?: InputMaybe<Scalars['felt252']['input']>;
  layout2GT?: InputMaybe<Scalars['felt252']['input']>;
  layout2GTE?: InputMaybe<Scalars['felt252']['input']>;
  layout2LT?: InputMaybe<Scalars['felt252']['input']>;
  layout2LTE?: InputMaybe<Scalars['felt252']['input']>;
  layout2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  layout3?: InputMaybe<Scalars['felt252']['input']>;
  layout3EQ?: InputMaybe<Scalars['felt252']['input']>;
  layout3GT?: InputMaybe<Scalars['felt252']['input']>;
  layout3GTE?: InputMaybe<Scalars['felt252']['input']>;
  layout3LT?: InputMaybe<Scalars['felt252']['input']>;
  layout3LTE?: InputMaybe<Scalars['felt252']['input']>;
  layout3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  legendary?: InputMaybe<Scalars['u8']['input']>;
  legendaryEQ?: InputMaybe<Scalars['u8']['input']>;
  legendaryGT?: InputMaybe<Scalars['u8']['input']>;
  legendaryGTE?: InputMaybe<Scalars['u8']['input']>;
  legendaryLT?: InputMaybe<Scalars['u8']['input']>;
  legendaryLTE?: InputMaybe<Scalars['u8']['input']>;
  legendaryNEQ?: InputMaybe<Scalars['u8']['input']>;
  owner?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  ownerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  points1?: InputMaybe<Scalars['felt252']['input']>;
  points1EQ?: InputMaybe<Scalars['felt252']['input']>;
  points1GT?: InputMaybe<Scalars['felt252']['input']>;
  points1GTE?: InputMaybe<Scalars['felt252']['input']>;
  points1LT?: InputMaybe<Scalars['felt252']['input']>;
  points1LTE?: InputMaybe<Scalars['felt252']['input']>;
  points1NEQ?: InputMaybe<Scalars['felt252']['input']>;
  points2?: InputMaybe<Scalars['felt252']['input']>;
  points2EQ?: InputMaybe<Scalars['felt252']['input']>;
  points2GT?: InputMaybe<Scalars['felt252']['input']>;
  points2GTE?: InputMaybe<Scalars['felt252']['input']>;
  points2LT?: InputMaybe<Scalars['felt252']['input']>;
  points2LTE?: InputMaybe<Scalars['felt252']['input']>;
  points2NEQ?: InputMaybe<Scalars['felt252']['input']>;
  points3?: InputMaybe<Scalars['felt252']['input']>;
  points3EQ?: InputMaybe<Scalars['felt252']['input']>;
  points3GT?: InputMaybe<Scalars['felt252']['input']>;
  points3GTE?: InputMaybe<Scalars['felt252']['input']>;
  points3LT?: InputMaybe<Scalars['felt252']['input']>;
  points3LTE?: InputMaybe<Scalars['felt252']['input']>;
  points3NEQ?: InputMaybe<Scalars['felt252']['input']>;
  size?: InputMaybe<Scalars['u8']['input']>;
  sizeEQ?: InputMaybe<Scalars['u8']['input']>;
  sizeGT?: InputMaybe<Scalars['u8']['input']>;
  sizeGTE?: InputMaybe<Scalars['u8']['input']>;
  sizeLT?: InputMaybe<Scalars['u8']['input']>;
  sizeLTE?: InputMaybe<Scalars['u8']['input']>;
  sizeNEQ?: InputMaybe<Scalars['u8']['input']>;
  structure?: InputMaybe<Scalars['u8']['input']>;
  structureEQ?: InputMaybe<Scalars['u8']['input']>;
  structureGT?: InputMaybe<Scalars['u8']['input']>;
  structureGTE?: InputMaybe<Scalars['u8']['input']>;
  structureLT?: InputMaybe<Scalars['u8']['input']>;
  structureLTE?: InputMaybe<Scalars['u8']['input']>;
  structureNEQ?: InputMaybe<Scalars['u8']['input']>;
  token_id?: InputMaybe<Scalars['u128']['input']>;
  token_idEQ?: InputMaybe<Scalars['u128']['input']>;
  token_idGT?: InputMaybe<Scalars['u128']['input']>;
  token_idGTE?: InputMaybe<Scalars['u128']['input']>;
  token_idLT?: InputMaybe<Scalars['u128']['input']>;
  token_idLTE?: InputMaybe<Scalars['u128']['input']>;
  token_idNEQ?: InputMaybe<Scalars['u128']['input']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  id?: Maybe<Scalars['ID']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type MetadataConnection = {
  __typename?: 'MetadataConnection';
  edges?: Maybe<Array<Maybe<MetadataEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MetadataEdge = {
  __typename?: 'MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Metadata>;
};

export type Model = {
  __typename?: 'Model';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  edges?: Maybe<Array<Maybe<ModelEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Model>;
};

export type ModelUnion = Map | Moves | Position;

export type Moves = {
  __typename?: 'Moves';
  entity?: Maybe<Entity>;
  last_direction?: Maybe<Scalars['Enum']['output']>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  remaining?: Maybe<Scalars['u8']['output']>;
};

export type MovesConnection = {
  __typename?: 'MovesConnection';
  edges?: Maybe<Array<Maybe<MovesEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type MovesEdge = {
  __typename?: 'MovesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Moves>;
};

export type MovesOrder = {
  direction: OrderDirection;
  field: MovesOrderField;
};

export enum MovesOrderField {
  LastDirection = 'LAST_DIRECTION',
  Player = 'PLAYER',
  Remaining = 'REMAINING'
}

export type MovesWhereInput = {
  last_direction?: InputMaybe<Scalars['Enum']['input']>;
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  remaining?: InputMaybe<Scalars['u8']['input']>;
  remainingEQ?: InputMaybe<Scalars['u8']['input']>;
  remainingGT?: InputMaybe<Scalars['u8']['input']>;
  remainingGTE?: InputMaybe<Scalars['u8']['input']>;
  remainingLT?: InputMaybe<Scalars['u8']['input']>;
  remainingLTE?: InputMaybe<Scalars['u8']['input']>;
  remainingNEQ?: InputMaybe<Scalars['u8']['input']>;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Position = {
  __typename?: 'Position';
  entity?: Maybe<Entity>;
  player?: Maybe<Scalars['ContractAddress']['output']>;
  vec?: Maybe<Vec2>;
};

export type PositionConnection = {
  __typename?: 'PositionConnection';
  edges?: Maybe<Array<Maybe<PositionEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type PositionEdge = {
  __typename?: 'PositionEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<Position>;
};

export type PositionOrder = {
  direction: OrderDirection;
  field: PositionOrderField;
};

export enum PositionOrderField {
  Player = 'PLAYER',
  Vec = 'VEC'
}

export type PositionWhereInput = {
  player?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
  playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Query = {
  __typename?: 'Query';
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  events?: Maybe<EventConnection>;
  mapModels?: Maybe<MapConnection>;
  metadata: Metadata;
  metadatas?: Maybe<MetadataConnection>;
  model: Model;
  models?: Maybe<ModelConnection>;
  movesModels?: Maybe<MovesConnection>;
  positionModels?: Maybe<PositionConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MapOrder>;
  where?: InputMaybe<MapWhereInput>;
};


export type QueryMetadataArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMovesModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<MovesOrder>;
  where?: InputMaybe<MovesWhereInput>;
};


export type QueryPositionModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PositionOrder>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  entityUpdated: Entity;
  modelRegistered: Model;
};


export type SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type System = {
  __typename?: 'System';
  class_hash?: Maybe<Scalars['felt252']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  systemCalls: Array<SystemCall>;
  transaction_hash?: Maybe<Scalars['felt252']['output']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  system: System;
  system_id?: Maybe<Scalars['ID']['output']>;
  transaction_hash?: Maybe<Scalars['String']['output']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  total_count: Scalars['Int']['output'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node?: Maybe<System>;
};

export type Vec2 = {
  __typename?: 'Vec2';
  x?: Maybe<Scalars['u32']['output']>;
  y?: Maybe<Scalars['u32']['output']>;
};

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Map', token_id?: any | null, size?: any | null, environment?: any | null, structure?: any | null, legendary?: any | null, layout1?: any | null, layout2?: any | null, layout3?: any | null, doors1?: any | null, doors2?: any | null, doors3?: any | null, points1?: any | null, points2?: any | null, points3?: any | null, affinity?: any | null, dungeon_name1?: any | null, dungeon_name2?: any | null, dungeon_name3?: any | null, dungeon_name4?: any | null, dungeon_name5?: any | null, owner?: any | null } | { __typename: 'Moves', remaining?: any | null, last_direction?: any | null } | { __typename: 'Position', vec?: { __typename?: 'Vec2', x?: any | null, y?: any | null } | null } | null> | null } | null } | null> | null } | null };


export const GetEntitiesDocument = gql`
    query getEntities {
  entities(keys: ["%"]) {
    edges {
      node {
        keys
        models {
          __typename
          ... on Moves {
            remaining
            last_direction
          }
          ... on Map {
            token_id
            size
            environment
            structure
            legendary
            layout1
            layout2
            layout3
            doors1
            doors2
            doors3
            points1
            points2
            points3
            affinity
            dungeon_name1
            dungeon_name2
            dungeon_name3
            dungeon_name4
            dungeon_name5
            owner
          }
          ... on Position {
            vec {
              x
              y
            }
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetEntitiesDocumentString = print(GetEntitiesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    // @ts-ignore
    getEntities(variables?: GetEntitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetEntitiesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetEntitiesQuery>(GetEntitiesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEntities', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;