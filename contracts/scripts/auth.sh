export Moves=0x68d0b7e7725181c37d687161d966d80732591beb5f0bddaf3830db0208b8d00
export Position=0x49a3628a034eae862ab3e5d87e43fa983820081842bc334eae6951f61324bfd
export world=0x52bec888add6c968772ca5f240b0da537dff15863eb6d5a37c931010dd26bb2
export
sozo auth writer Position move --world $world
sozo auth writer $Position spawn --world $world
sozo auth writer $Moves move --world $world
sozo auth writer $Moves spawn --world $world

export cc=0x14e2d243864cd2433ea34f55dd9ed136366f5f71cb99f69cfc2ead0912e4518

sozo auth writer CC $cc --world $world