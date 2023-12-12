> This example is not a complete or fully functional implementation of the game. Instead, it is a basic demonstration that illustrates how to integrate C&C (Crypts And Caverns) into the game world.

# demonstrate

![demonstrate](https://github.com/CheDAOLabs/cc-dojo-map/blob/main/docs/assets/cc-dojo-map.gif?raw=true)

# crypts and caverns example

A simple game example

Requires Dojo to implement player movement

interface

```
#[starknet::interface]
trait ICryptsAndCaverns<TState> {

    fn owner_of(self: @TState, token_id: u256);

    fn get_svg(self: @TState, token_id: u256);

    fn generate_dungeon(self: @TState, token_id: u256);

    fn get_seed(self: @TState, token_id: u256);

    fn mint(ref self: TState);

}
```

### Components

- Player
- Map
  
### Systems

- Movement
  
### Split into several stages

- Parsing CC map data using Cairo, which can depend on the CC library
- Implementing new map generation based on the CC library, without using the mint form
- Allowing the player to move on the map and interact with local katana
- Implementing points of interest and teleportation points

## How to build

Omitting the installation of Rust, Cairo, and Scarb.

### build backend

1. Clone the source code:

```shell
git clone https://github.com/CheDAOLabs/cc-dojo-map.git
```

2. Execute the script, specifying the Dojo version:

```shell
dojoup
```

3. Start Katana:

```shell
katana --disable-fee --invoke-max-steps 4294967295
```

4. Compile the contract:

```shell
sozo build
```

5. Deploy the contract:

```shell
sozo migrate --name cc_dojo_map  
```

6. Indexer

```shell
torii --world WORLD_ADDRESS
```

7. Add auth
```shell
cd script & sh default_auth.sh
```

8. Invoke the contract:

```shell
sozo execute CC_CONTRACT_ADDRESS test
```

### build client
### Environment Setup

1. **Bun Installation**: We use [bun](https://bun.sh/) in this repository. To install it, run:
    ```console
    curl -fsSL https://bun.sh/install | bash
    ```

---

### Development

#### Package Dependencies Installation:

From the repository root, run the following to install all the necessary package dependencies:

```console
bun install
```

#### Package Linking:

To link the packages to the examples or your own project, from the root directory, run:

```console
bun link
```

#### Building Packages:

**Note**: Before running the examples, you must build each package.

To do so, navigate to a specific package directory and run the command below. This will initiate bun in watch mode, which will automatically compile and update based on local changes:

```console
bun run build --watch
```

To build all packages, from the root directory, run:

```console
bun run build
```

To watch for changes on all packages in parallel, from the root directory, run:

```console
bun run build-watch
```

#### Start the React app.

```console
cd client3
bun install
bun dev
```

```shell
http://localhost:5173/
```

### Project Structure

| Name | Description |
| --- | --- |
|client| for testnet c&c|
|client3| for katana c&c|

### Version Check

| Name | Version | Compatibility Dojo version | Coments
| --- | --- | --- | --- |
|cc-dojo-map|v0.1.0|v0.2.3| testnet C&C integrated into Dojo
|cc-dojo-map|v0.2.0|v0.3.0-rc9| update dojo to v0.3.0-rc9
|cc-dojo-map|v0.2.1|v0.3.0| update dojo to v0.3.0
|cc-dojo-map|v0.3.0|v0.3.0| C&C deployed in Katana
|cc-dojo-map|v0.3.15|v0.3.15| update dojo to v0.3.15
