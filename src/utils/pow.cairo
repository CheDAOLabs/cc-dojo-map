fn get_pow(position: u128) -> u256 {
    if position <= 126 {
        if position <= 63 {
            if position <= 31 {
                if position <= 15 {
                    if position <= 7 {
                        if position <= 3 {
                            if position <= 1 {
                                if position == 0 {
                                    POW_0
                                } else {
                                    POW_1
                                }
                            } else {
                                if position == 2 {
                                    POW_2
                                } else {
                                    POW_3
                                }
                            }
                        } else {
                            if position <= 5 {
                                if position == 4 {
                                    POW_4
                                } else {
                                    POW_5
                                }
                            } else {
                                if position == 6 {
                                    POW_6
                                } else {
                                    POW_7
                                }
                            }
                        }
                    } else {
                        if position <= 11 {
                            if position <= 9 {
                                if position == 8 {
                                    POW_8
                                } else {
                                    POW_9
                                }
                            } else {
                                if position == 10 {
                                    POW_10
                                } else {
                                    POW_11
                                }
                            }
                        } else {
                            if position <= 13 {
                                if position == 12 {
                                    POW_12
                                } else {
                                    POW_13
                                }
                            } else {
                                if position == 14 {
                                    POW_14
                                } else {
                                    POW_15
                                }
                            }
                        }
                    }
                } else {
                    if position <= 23 {
                        if position <= 19 {
                            if position <= 17 {
                                if position == 16 {
                                    POW_16
                                } else {
                                    POW_17
                                }
                            } else {
                                if position == 18 {
                                    POW_18
                                } else {
                                    POW_19
                                }
                            }
                        } else {
                            if position <= 21 {
                                if position == 20 {
                                    POW_20
                                } else {
                                    POW_21
                                }
                            } else {
                                if position == 22 {
                                    POW_22
                                } else {
                                    POW_23
                                }
                            }
                        }
                    } else {
                        if position <= 27 {
                            if position <= 25 {
                                if position == 24 {
                                    POW_24
                                } else {
                                    POW_25
                                }
                            } else {
                                if position == 26 {
                                    POW_26
                                } else {
                                    POW_27
                                }
                            }
                        } else {
                            if position <= 29 {
                                if position == 28 {
                                    POW_28
                                } else {
                                    POW_29
                                }
                            } else {
                                if position == 30 {
                                    POW_30
                                } else {
                                    POW_31
                                }
                            }
                        }
                    }
                }
            } else {
                if position <= 47 {
                    if position <= 39 {
                        if position <= 35 {
                            if position <= 33 {
                                if position == 32 {
                                    POW_32
                                } else {
                                    POW_33
                                }
                            } else {
                                if position == 34 {
                                    POW_34
                                } else {
                                    POW_35
                                }
                            }
                        } else {
                            if position <= 37 {
                                if position == 36 {
                                    POW_36
                                } else {
                                    POW_37
                                }
                            } else {
                                if position == 38 {
                                    POW_38
                                } else {
                                    POW_39
                                }
                            }
                        }
                    } else {
                        if position <= 43 {
                            if position <= 41 {
                                if position == 40 {
                                    POW_40
                                } else {
                                    POW_41
                                }
                            } else {
                                if position == 42 {
                                    POW_42
                                } else {
                                    POW_43
                                }
                            }
                        } else {
                            if position <= 45 {
                                if position == 44 {
                                    POW_44
                                } else {
                                    POW_45
                                }
                            } else {
                                if position == 46 {
                                    POW_46
                                } else {
                                    POW_47
                                }
                            }
                        }
                    }
                } else {
                    if position <= 55 {
                        if position <= 51 {
                            if position <= 49 {
                                if position == 48 {
                                    POW_48
                                } else {
                                    POW_49
                                }
                            } else {
                                if position == 50 {
                                    POW_50
                                } else {
                                    POW_51
                                }
                            }
                        } else {
                            if position <= 53 {
                                if position == 52 {
                                    POW_52
                                } else {
                                    POW_53
                                }
                            } else {
                                if position == 54 {
                                    POW_54
                                } else {
                                    POW_55
                                }
                            }
                        }
                    } else {
                        if position <= 59 {
                            if position <= 57 {
                                if position == 56 {
                                    POW_56
                                } else {
                                    POW_57
                                }
                            } else {
                                if position == 58 {
                                    POW_58
                                } else {
                                    POW_59
                                }
                            }
                        } else {
                            if position <= 61 {
                                if position == 60 {
                                    POW_60
                                } else {
                                    POW_61
                                }
                            } else {
                                if position == 62 {
                                    POW_62
                                } else {
                                    POW_63
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if position <= 95 {
                if position <= 79 {
                    if position <= 71 {
                        if position <= 67 {
                            if position <= 65 {
                                if position == 64 {
                                    POW_64
                                } else {
                                    POW_65
                                }
                            } else {
                                if position == 66 {
                                    POW_66
                                } else {
                                    POW_67
                                }
                            }
                        } else {
                            if position <= 69 {
                                if position == 68 {
                                    POW_68
                                } else {
                                    POW_69
                                }
                            } else {
                                if position == 70 {
                                    POW_70
                                } else {
                                    POW_71
                                }
                            }
                        }
                    } else {
                        if position <= 75 {
                            if position <= 73 {
                                if position == 72 {
                                    POW_72
                                } else {
                                    POW_73
                                }
                            } else {
                                if position == 74 {
                                    POW_74
                                } else {
                                    POW_75
                                }
                            }
                        } else {
                            if position <= 77 {
                                if position == 76 {
                                    POW_76
                                } else {
                                    POW_77
                                }
                            } else {
                                if position == 78 {
                                    POW_78
                                } else {
                                    POW_79
                                }
                            }
                        }
                    }
                } else {
                    if position <= 87 {
                        if position <= 83 {
                            if position <= 81 {
                                if position == 80 {
                                    POW_80
                                } else {
                                    POW_81
                                }
                            } else {
                                if position == 82 {
                                    POW_82
                                } else {
                                    POW_83
                                }
                            }
                        } else {
                            if position <= 85 {
                                if position == 84 {
                                    POW_84
                                } else {
                                    POW_85
                                }
                            } else {
                                if position == 86 {
                                    POW_86
                                } else {
                                    POW_87
                                }
                            }
                        }
                    } else {
                        if position <= 91 {
                            if position <= 89 {
                                if position == 88 {
                                    POW_88
                                } else {
                                    POW_89
                                }
                            } else {
                                if position == 90 {
                                    POW_90
                                } else {
                                    POW_91
                                }
                            }
                        } else {
                            if position <= 93 {
                                if position == 92 {
                                    POW_92
                                } else {
                                    POW_93
                                }
                            } else {
                                if position == 94 {
                                    POW_94
                                } else {
                                    POW_95
                                }
                            }
                        }
                    }
                }
            } else {
                if position <= 111 {
                    if position <= 103 {
                        if position <= 99 {
                            if position <= 97 {
                                if position == 96 {
                                    POW_96
                                } else {
                                    POW_97
                                }
                            } else {
                                if position == 98 {
                                    POW_98
                                } else {
                                    POW_99
                                }
                            }
                        } else {
                            if position <= 101 {
                                if position == 100 {
                                    POW_100
                                } else {
                                    POW_101
                                }
                            } else {
                                if position == 102 {
                                    POW_102
                                } else {
                                    POW_103
                                }
                            }
                        }
                    } else {
                        if position <= 107 {
                            if position <= 105 {
                                if position == 104 {
                                    POW_104
                                } else {
                                    POW_105
                                }
                            } else {
                                if position == 106 {
                                    POW_106
                                } else {
                                    POW_107
                                }
                            }
                        } else {
                            if position <= 109 {
                                if position == 108 {
                                    POW_108
                                } else {
                                    POW_109
                                }
                            } else {
                                if position == 110 {
                                    POW_110
                                } else {
                                    POW_111
                                }
                            }
                        }
                    }
                } else {
                    if position <= 119 {
                        if position <= 115 {
                            if position <= 113 {
                                if position == 112 {
                                    POW_112
                                } else {
                                    POW_113
                                }
                            } else {
                                if position == 114 {
                                    POW_114
                                } else {
                                    POW_115
                                }
                            }
                        } else {
                            if position <= 117 {
                                if position == 116 {
                                    POW_116
                                } else {
                                    POW_117
                                }
                            } else {
                                if position == 118 {
                                    POW_118
                                } else {
                                    POW_119
                                }
                            }
                        }
                    } else {
                        if position <= 123 {
                            if position <= 121 {
                                if position == 120 {
                                    POW_120
                                } else {
                                    POW_121
                                }
                            } else {
                                if position == 122 {
                                    POW_122
                                } else {
                                    POW_123
                                }
                            }
                        } else {
                            if position <= 125 {
                                if position == 124 {
                                    POW_124
                                } else {
                                    POW_125
                                }
                            } else {
                                POW_126
                            }
                        }
                    }
                }
            }
        }
    } else {
        if position <= 189 {
            if position <= 158 {
                if position <= 142 {
                    if position <= 134 {
                        if position <= 130 {
                            if position <= 128 {
                                if position == 127 {
                                    POW_127
                                } else {
                                    POW_128
                                }
                            } else {
                                if position == 129 {
                                    POW_129
                                } else {
                                    POW_130
                                }
                            }
                        } else {
                            if position <= 132 {
                                if position == 131 {
                                    POW_131
                                } else {
                                    POW_132
                                }
                            } else {
                                if position == 133 {
                                    POW_133
                                } else {
                                    POW_134
                                }
                            }
                        }
                    } else {
                        if position <= 138 {
                            if position <= 136 {
                                if position == 135 {
                                    POW_135
                                } else {
                                    POW_136
                                }
                            } else {
                                if position == 137 {
                                    POW_137
                                } else {
                                    POW_138
                                }
                            }
                        } else {
                            if position <= 140 {
                                if position == 139 {
                                    POW_139
                                } else {
                                    POW_140
                                }
                            } else {
                                if position == 141 {
                                    POW_141
                                } else {
                                    POW_142
                                }
                            }
                        }
                    }
                } else {
                    if position <= 150 {
                        if position <= 146 {
                            if position <= 144 {
                                if position == 143 {
                                    POW_143
                                } else {
                                    POW_144
                                }
                            } else {
                                if position == 145 {
                                    POW_145
                                } else {
                                    POW_146
                                }
                            }
                        } else {
                            if position <= 148 {
                                if position == 147 {
                                    POW_147
                                } else {
                                    POW_148
                                }
                            } else {
                                if position == 149 {
                                    POW_149
                                } else {
                                    POW_150
                                }
                            }
                        }
                    } else {
                        if position <= 154 {
                            if position <= 152 {
                                if position == 151 {
                                    POW_151
                                } else {
                                    POW_152
                                }
                            } else {
                                if position == 153 {
                                    POW_153
                                } else {
                                    POW_154
                                }
                            }
                        } else {
                            if position <= 156 {
                                if position == 155 {
                                    POW_155
                                } else {
                                    POW_156
                                }
                            } else {
                                if position == 157 {
                                    POW_157
                                } else {
                                    POW_158
                                }
                            }
                        }
                    }
                }
            } else {
                if position <= 174 {
                    if position <= 166 {
                        if position <= 162 {
                            if position <= 160 {
                                if position == 159 {
                                    POW_159
                                } else {
                                    POW_160
                                }
                            } else {
                                if position == 161 {
                                    POW_161
                                } else {
                                    POW_162
                                }
                            }
                        } else {
                            if position <= 164 {
                                if position == 163 {
                                    POW_163
                                } else {
                                    POW_164
                                }
                            } else {
                                if position == 165 {
                                    POW_165
                                } else {
                                    POW_166
                                }
                            }
                        }
                    } else {
                        if position <= 170 {
                            if position <= 168 {
                                if position == 167 {
                                    POW_167
                                } else {
                                    POW_168
                                }
                            } else {
                                if position == 169 {
                                    POW_169
                                } else {
                                    POW_170
                                }
                            }
                        } else {
                            if position <= 172 {
                                if position == 171 {
                                    POW_171
                                } else {
                                    POW_172
                                }
                            } else {
                                if position == 173 {
                                    POW_173
                                } else {
                                    POW_174
                                }
                            }
                        }
                    }
                } else {
                    if position <= 182 {
                        if position <= 178 {
                            if position <= 176 {
                                if position == 175 {
                                    POW_175
                                } else {
                                    POW_176
                                }
                            } else {
                                if position == 177 {
                                    POW_177
                                } else {
                                    POW_178
                                }
                            }
                        } else {
                            if position <= 180 {
                                if position == 179 {
                                    POW_179
                                } else {
                                    POW_180
                                }
                            } else {
                                if position == 181 {
                                    POW_181
                                } else {
                                    POW_182
                                }
                            }
                        }
                    } else {
                        if position <= 186 {
                            if position <= 184 {
                                if position == 183 {
                                    POW_183
                                } else {
                                    POW_184
                                }
                            } else {
                                if position == 185 {
                                    POW_185
                                } else {
                                    POW_186
                                }
                            }
                        } else {
                            if position <= 188 {
                                if position == 187 {
                                    POW_187
                                } else {
                                    POW_188
                                }
                            } else {
                                POW_189
                            }
                        }
                    }
                }
            }
        } else {
            if position <= 221 {
                if position <= 205 {
                    if position <= 197 {
                        if position <= 193 {
                            if position <= 191 {
                                if position == 190 {
                                    POW_190
                                } else {
                                    POW_191
                                }
                            } else {
                                if position == 192 {
                                    POW_192
                                } else {
                                    POW_193
                                }
                            }
                        } else {
                            if position <= 195 {
                                if position == 194 {
                                    POW_194
                                } else {
                                    POW_195
                                }
                            } else {
                                if position == 196 {
                                    POW_196
                                } else {
                                    POW_197
                                }
                            }
                        }
                    } else {
                        if position <= 201 {
                            if position <= 199 {
                                if position == 198 {
                                    POW_198
                                } else {
                                    POW_199
                                }
                            } else {
                                if position == 200 {
                                    POW_200
                                } else {
                                    POW_201
                                }
                            }
                        } else {
                            if position <= 203 {
                                if position == 202 {
                                    POW_202
                                } else {
                                    POW_203
                                }
                            } else {
                                if position == 204 {
                                    POW_204
                                } else {
                                    POW_205
                                }
                            }
                        }
                    }
                } else {
                    if position <= 213 {
                        if position <= 209 {
                            if position <= 207 {
                                if position == 206 {
                                    POW_206
                                } else {
                                    POW_207
                                }
                            } else {
                                if position == 208 {
                                    POW_208
                                } else {
                                    POW_209
                                }
                            }
                        } else {
                            if position <= 211 {
                                if position == 210 {
                                    POW_210
                                } else {
                                    POW_211
                                }
                            } else {
                                if position == 212 {
                                    POW_212
                                } else {
                                    POW_213
                                }
                            }
                        }
                    } else {
                        if position <= 217 {
                            if position <= 215 {
                                if position == 214 {
                                    POW_214
                                } else {
                                    POW_215
                                }
                            } else {
                                if position == 216 {
                                    POW_216
                                } else {
                                    POW_217
                                }
                            }
                        } else {
                            if position <= 219 {
                                if position == 218 {
                                    POW_218
                                } else {
                                    POW_219
                                }
                            } else {
                                if position == 220 {
                                    POW_220
                                } else {
                                    POW_221
                                }
                            }
                        }
                    }
                }
            } else {
                if position <= 237 {
                    if position <= 229 {
                        if position <= 225 {
                            if position <= 223 {
                                if position == 222 {
                                    POW_222
                                } else {
                                    POW_223
                                }
                            } else {
                                if position == 224 {
                                    POW_224
                                } else {
                                    POW_225
                                }
                            }
                        } else {
                            if position <= 227 {
                                if position == 226 {
                                    POW_226
                                } else {
                                    POW_227
                                }
                            } else {
                                if position == 228 {
                                    POW_228
                                } else {
                                    POW_229
                                }
                            }
                        }
                    } else {
                        if position <= 233 {
                            if position <= 231 {
                                if position == 230 {
                                    POW_230
                                } else {
                                    POW_231
                                }
                            } else {
                                if position == 232 {
                                    POW_232
                                } else {
                                    POW_233
                                }
                            }
                        } else {
                            if position <= 235 {
                                if position == 234 {
                                    POW_234
                                } else {
                                    POW_235
                                }
                            } else {
                                if position == 236 {
                                    POW_236
                                } else {
                                    POW_237
                                }
                            }
                        }
                    }
                } else {
                    if position <= 245 {
                        if position <= 241 {
                            if position <= 239 {
                                if position == 238 {
                                    POW_238
                                } else {
                                    POW_239
                                }
                            } else {
                                if position == 240 {
                                    POW_240
                                } else {
                                    POW_241
                                }
                            }
                        } else {
                            if position <= 243 {
                                if position == 242 {
                                    POW_242
                                } else {
                                    POW_243
                                }
                            } else {
                                if position == 244 {
                                    POW_244
                                } else {
                                    POW_245
                                }
                            }
                        }
                    } else {
                        if position <= 249 {
                            if position <= 247 {
                                if position == 246 {
                                    POW_246
                                } else {
                                    POW_247
                                }
                            } else {
                                if position == 248 {
                                    POW_248
                                } else {
                                    POW_249
                                }
                            }
                        } else {
                            if position <= 251 {
                                if position == 250 {
                                    POW_250
                                } else {
                                    POW_251
                                }
                            } else {
                                POW_252
                            }
                        }
                    }
                }
            }
        }
    }
}


const POW_0: u256 = 0x1; // 2^0
const POW_1: u256 = 0x2; // 2^1
const POW_2: u256 = 0x4; // 2^2
const POW_3: u256 = 0x8; // 2^3
const POW_4: u256 = 0x10; // 2^4
const POW_5: u256 = 0x20; // 2^5
const POW_6: u256 = 0x40; // 2^6
const POW_7: u256 = 0x80; // 2^7
const POW_8: u256 = 0x100; // 2^8
const POW_9: u256 = 0x200; // 2^9
const POW_10: u256 = 0x400; // 2^10
const POW_11: u256 = 0x800; // 2^11
const POW_12: u256 = 0x1000; // 2^12
const POW_13: u256 = 0x2000; // 2^13
const POW_14: u256 = 0x4000; // 2^14
const POW_15: u256 = 0x8000; // 2^15
const POW_16: u256 = 0x10000; // 2^16
const POW_17: u256 = 0x20000; // 2^17
const POW_18: u256 = 0x40000; // 2^18
const POW_19: u256 = 0x80000; // 2^19
const POW_20: u256 = 0x100000; // 2^20
const POW_21: u256 = 0x200000; // 2^21
const POW_22: u256 = 0x400000; // 2^22
const POW_23: u256 = 0x800000; // 2^23
const POW_24: u256 = 0x1000000; // 2^24
const POW_25: u256 = 0x2000000; // 2^25
const POW_26: u256 = 0x4000000; // 2^26
const POW_27: u256 = 0x8000000; // 2^27
const POW_28: u256 = 0x10000000; // 2^28
const POW_29: u256 = 0x20000000; // 2^29
const POW_30: u256 = 0x40000000; // 2^30
const POW_31: u256 = 0x80000000; // 2^31
const POW_32: u256 = 0x100000000; // 2^32
const POW_33: u256 = 0x200000000; // 2^33
const POW_34: u256 = 0x400000000; // 2^34
const POW_35: u256 = 0x800000000; // 2^35
const POW_36: u256 = 0x1000000000; // 2^36
const POW_37: u256 = 0x2000000000; // 2^37
const POW_38: u256 = 0x4000000000; // 2^38
const POW_39: u256 = 0x8000000000; // 2^39
const POW_40: u256 = 0x10000000000; // 2^40
const POW_41: u256 = 0x20000000000; // 2^41
const POW_42: u256 = 0x40000000000; // 2^42
const POW_43: u256 = 0x80000000000; // 2^43
const POW_44: u256 = 0x100000000000; // 2^44
const POW_45: u256 = 0x200000000000; // 2^45
const POW_46: u256 = 0x400000000000; // 2^46
const POW_47: u256 = 0x800000000000; // 2^47
const POW_48: u256 = 0x1000000000000; // 2^48
const POW_49: u256 = 0x2000000000000; // 2^49
const POW_50: u256 = 0x4000000000000; // 2^50
const POW_51: u256 = 0x8000000000000; // 2^51
const POW_52: u256 = 0x10000000000000; // 2^52
const POW_53: u256 = 0x20000000000000; // 2^53
const POW_54: u256 = 0x40000000000000; // 2^54
const POW_55: u256 = 0x80000000000000; // 2^55
const POW_56: u256 = 0x100000000000000; // 2^56
const POW_57: u256 = 0x200000000000000; // 2^57
const POW_58: u256 = 0x400000000000000; // 2^58
const POW_59: u256 = 0x800000000000000; // 2^59
const POW_60: u256 = 0x1000000000000000; // 2^60
const POW_61: u256 = 0x2000000000000000; // 2^61
const POW_62: u256 = 0x4000000000000000; // 2^62
const POW_63: u256 = 0x8000000000000000; // 2^63
const POW_64: u256 = 0x10000000000000000; // 2^64
const POW_65: u256 = 0x20000000000000000; // 2^65
const POW_66: u256 = 0x40000000000000000; // 2^66
const POW_67: u256 = 0x80000000000000000; // 2^67
const POW_68: u256 = 0x100000000000000000; // 2^68
const POW_69: u256 = 0x200000000000000000; // 2^69
const POW_70: u256 = 0x400000000000000000; // 2^70
const POW_71: u256 = 0x800000000000000000; // 2^71
const POW_72: u256 = 0x1000000000000000000; // 2^72
const POW_73: u256 = 0x2000000000000000000; // 2^73
const POW_74: u256 = 0x4000000000000000000; // 2^74
const POW_75: u256 = 0x8000000000000000000; // 2^75
const POW_76: u256 = 0x10000000000000000000; // 2^76
const POW_77: u256 = 0x20000000000000000000; // 2^77
const POW_78: u256 = 0x40000000000000000000; // 2^78
const POW_79: u256 = 0x80000000000000000000; // 2^79
const POW_80: u256 = 0x100000000000000000000; // 2^80
const POW_81: u256 = 0x200000000000000000000; // 2^81
const POW_82: u256 = 0x400000000000000000000; // 2^82
const POW_83: u256 = 0x800000000000000000000; // 2^83
const POW_84: u256 = 0x1000000000000000000000; // 2^84
const POW_85: u256 = 0x2000000000000000000000; // 2^85
const POW_86: u256 = 0x4000000000000000000000; // 2^86
const POW_87: u256 = 0x8000000000000000000000; // 2^87
const POW_88: u256 = 0x10000000000000000000000; // 2^88
const POW_89: u256 = 0x20000000000000000000000; // 2^89
const POW_90: u256 = 0x40000000000000000000000; // 2^90
const POW_91: u256 = 0x80000000000000000000000; // 2^91
const POW_92: u256 = 0x100000000000000000000000; // 2^92
const POW_93: u256 = 0x200000000000000000000000; // 2^93
const POW_94: u256 = 0x400000000000000000000000; // 2^94
const POW_95: u256 = 0x800000000000000000000000; // 2^95
const POW_96: u256 = 0x1000000000000000000000000; // 2^96
const POW_97: u256 = 0x2000000000000000000000000; // 2^97
const POW_98: u256 = 0x4000000000000000000000000; // 2^98
const POW_99: u256 = 0x8000000000000000000000000; // 2^99
const POW_100: u256 = 0x10000000000000000000000000; // 2^100
const POW_101: u256 = 0x20000000000000000000000000; // 2^101
const POW_102: u256 = 0x40000000000000000000000000; // 2^102
const POW_103: u256 = 0x80000000000000000000000000; // 2^103
const POW_104: u256 = 0x100000000000000000000000000; // 2^104
const POW_105: u256 = 0x200000000000000000000000000; // 2^105
const POW_106: u256 = 0x400000000000000000000000000; // 2^106
const POW_107: u256 = 0x800000000000000000000000000; // 2^107
const POW_108: u256 = 0x1000000000000000000000000000; // 2^108
const POW_109: u256 = 0x2000000000000000000000000000; // 2^109
const POW_110: u256 = 0x4000000000000000000000000000; // 2^110
const POW_111: u256 = 0x8000000000000000000000000000; // 2^111
const POW_112: u256 = 0x10000000000000000000000000000; // 2^112
const POW_113: u256 = 0x20000000000000000000000000000; // 2^113
const POW_114: u256 = 0x40000000000000000000000000000; // 2^114
const POW_115: u256 = 0x80000000000000000000000000000; // 2^115
const POW_116: u256 = 0x100000000000000000000000000000; // 2^116
const POW_117: u256 = 0x200000000000000000000000000000; // 2^117
const POW_118: u256 = 0x400000000000000000000000000000; // 2^118
const POW_119: u256 = 0x800000000000000000000000000000; // 2^119
const POW_120: u256 = 0x1000000000000000000000000000000; // 2^120
const POW_121: u256 = 0x2000000000000000000000000000000; // 2^121
const POW_122: u256 = 0x4000000000000000000000000000000; // 2^122
const POW_123: u256 = 0x8000000000000000000000000000000; // 2^123
const POW_124: u256 = 0x10000000000000000000000000000000; // 2^124
const POW_125: u256 = 0x20000000000000000000000000000000; // 2^125
const POW_126: u256 = 0x40000000000000000000000000000000; // 2^126
const POW_127: u256 = 0x80000000000000000000000000000000; // 2^127
const POW_128: u256 = 0x100000000000000000000000000000000; // 2^128
const POW_129: u256 = 0x200000000000000000000000000000000; // 2^129
const POW_130: u256 = 0x400000000000000000000000000000000; // 2^130
const POW_131: u256 = 0x800000000000000000000000000000000; // 2^131
const POW_132: u256 = 0x1000000000000000000000000000000000; // 2^132
const POW_133: u256 = 0x2000000000000000000000000000000000; // 2^133
const POW_134: u256 = 0x4000000000000000000000000000000000; // 2^134
const POW_135: u256 = 0x8000000000000000000000000000000000; // 2^135
const POW_136: u256 = 0x10000000000000000000000000000000000; // 2^136
const POW_137: u256 = 0x20000000000000000000000000000000000; // 2^137
const POW_138: u256 = 0x40000000000000000000000000000000000; // 2^138
const POW_139: u256 = 0x80000000000000000000000000000000000; // 2^139
const POW_140: u256 = 0x100000000000000000000000000000000000; // 2^140
const POW_141: u256 = 0x200000000000000000000000000000000000; // 2^141
const POW_142: u256 = 0x400000000000000000000000000000000000; // 2^142
const POW_143: u256 = 0x800000000000000000000000000000000000; // 2^143
const POW_144: u256 = 0x1000000000000000000000000000000000000; // 2^144
const POW_145: u256 = 0x2000000000000000000000000000000000000; // 2^145
const POW_146: u256 = 0x4000000000000000000000000000000000000; // 2^146
const POW_147: u256 = 0x8000000000000000000000000000000000000; // 2^147
const POW_148: u256 = 0x10000000000000000000000000000000000000; // 2^148
const POW_149: u256 = 0x20000000000000000000000000000000000000; // 2^149
const POW_150: u256 = 0x40000000000000000000000000000000000000; // 2^150
const POW_151: u256 = 0x80000000000000000000000000000000000000; // 2^151
const POW_152: u256 = 0x100000000000000000000000000000000000000; // 2^152
const POW_153: u256 = 0x200000000000000000000000000000000000000; // 2^153
const POW_154: u256 = 0x400000000000000000000000000000000000000; // 2^154
const POW_155: u256 = 0x800000000000000000000000000000000000000; // 2^155
const POW_156: u256 = 0x1000000000000000000000000000000000000000; // 2^156
const POW_157: u256 = 0x2000000000000000000000000000000000000000; // 2^157
const POW_158: u256 = 0x4000000000000000000000000000000000000000; // 2^158
const POW_159: u256 = 0x8000000000000000000000000000000000000000; // 2^159
const POW_160: u256 = 0x10000000000000000000000000000000000000000; // 2^160
const POW_161: u256 = 0x20000000000000000000000000000000000000000; // 2^161
const POW_162: u256 = 0x40000000000000000000000000000000000000000; // 2^162
const POW_163: u256 = 0x80000000000000000000000000000000000000000; // 2^163
const POW_164: u256 = 0x100000000000000000000000000000000000000000; // 2^164
const POW_165: u256 = 0x200000000000000000000000000000000000000000; // 2^165
const POW_166: u256 = 0x400000000000000000000000000000000000000000; // 2^166
const POW_167: u256 = 0x800000000000000000000000000000000000000000; // 2^167
const POW_168: u256 = 0x1000000000000000000000000000000000000000000; // 2^168
const POW_169: u256 = 0x2000000000000000000000000000000000000000000; // 2^169
const POW_170: u256 = 0x4000000000000000000000000000000000000000000; // 2^170
const POW_171: u256 = 0x8000000000000000000000000000000000000000000; // 2^171
const POW_172: u256 = 0x10000000000000000000000000000000000000000000; // 2^172
const POW_173: u256 = 0x20000000000000000000000000000000000000000000; // 2^173
const POW_174: u256 = 0x40000000000000000000000000000000000000000000; // 2^174
const POW_175: u256 = 0x80000000000000000000000000000000000000000000; // 2^175
const POW_176: u256 = 0x100000000000000000000000000000000000000000000; // 2^176
const POW_177: u256 = 0x200000000000000000000000000000000000000000000; // 2^177
const POW_178: u256 = 0x400000000000000000000000000000000000000000000; // 2^178
const POW_179: u256 = 0x800000000000000000000000000000000000000000000; // 2^179
const POW_180: u256 = 0x1000000000000000000000000000000000000000000000; // 2^180
const POW_181: u256 = 0x2000000000000000000000000000000000000000000000; // 2^181
const POW_182: u256 = 0x4000000000000000000000000000000000000000000000; // 2^182
const POW_183: u256 = 0x8000000000000000000000000000000000000000000000; // 2^183
const POW_184: u256 = 0x10000000000000000000000000000000000000000000000; // 2^184
const POW_185: u256 = 0x20000000000000000000000000000000000000000000000; // 2^185
const POW_186: u256 = 0x40000000000000000000000000000000000000000000000; // 2^186
const POW_187: u256 = 0x80000000000000000000000000000000000000000000000; // 2^187
const POW_188: u256 = 0x100000000000000000000000000000000000000000000000; // 2^188
const POW_189: u256 = 0x200000000000000000000000000000000000000000000000; // 2^189
const POW_190: u256 = 0x400000000000000000000000000000000000000000000000; // 2^190
const POW_191: u256 = 0x800000000000000000000000000000000000000000000000; // 2^191
const POW_192: u256 = 0x1000000000000000000000000000000000000000000000000; // 2^192
const POW_193: u256 = 0x2000000000000000000000000000000000000000000000000; // 2^193
const POW_194: u256 = 0x4000000000000000000000000000000000000000000000000; // 2^194
const POW_195: u256 = 0x8000000000000000000000000000000000000000000000000; // 2^195
const POW_196: u256 = 0x10000000000000000000000000000000000000000000000000; // 2^196
const POW_197: u256 = 0x20000000000000000000000000000000000000000000000000; // 2^197
const POW_198: u256 = 0x40000000000000000000000000000000000000000000000000; // 2^198
const POW_199: u256 = 0x80000000000000000000000000000000000000000000000000; // 2^199
const POW_200: u256 = 0x100000000000000000000000000000000000000000000000000; // 2^200
const POW_201: u256 = 0x200000000000000000000000000000000000000000000000000; // 2^201
const POW_202: u256 = 0x400000000000000000000000000000000000000000000000000; // 2^202
const POW_203: u256 = 0x800000000000000000000000000000000000000000000000000; // 2^203
const POW_204: u256 = 0x1000000000000000000000000000000000000000000000000000; // 2^204
const POW_205: u256 = 0x2000000000000000000000000000000000000000000000000000; // 2^205
const POW_206: u256 = 0x4000000000000000000000000000000000000000000000000000; // 2^206
const POW_207: u256 = 0x8000000000000000000000000000000000000000000000000000; // 2^207
const POW_208: u256 = 0x10000000000000000000000000000000000000000000000000000; // 2^208
const POW_209: u256 = 0x20000000000000000000000000000000000000000000000000000; // 2^209
const POW_210: u256 = 0x40000000000000000000000000000000000000000000000000000; // 2^210
const POW_211: u256 = 0x80000000000000000000000000000000000000000000000000000; // 2^211
const POW_212: u256 = 0x100000000000000000000000000000000000000000000000000000; // 2^212
const POW_213: u256 = 0x200000000000000000000000000000000000000000000000000000; // 2^213
const POW_214: u256 = 0x400000000000000000000000000000000000000000000000000000; // 2^214
const POW_215: u256 = 0x800000000000000000000000000000000000000000000000000000; // 2^215
const POW_216: u256 = 0x1000000000000000000000000000000000000000000000000000000; // 2^216
const POW_217: u256 = 0x2000000000000000000000000000000000000000000000000000000; // 2^217
const POW_218: u256 = 0x4000000000000000000000000000000000000000000000000000000; // 2^218
const POW_219: u256 = 0x8000000000000000000000000000000000000000000000000000000; // 2^219
const POW_220: u256 = 0x10000000000000000000000000000000000000000000000000000000; // 2^220
const POW_221: u256 = 0x20000000000000000000000000000000000000000000000000000000; // 2^221
const POW_222: u256 = 0x40000000000000000000000000000000000000000000000000000000; // 2^222
const POW_223: u256 = 0x80000000000000000000000000000000000000000000000000000000; // 2^223
const POW_224: u256 = 0x100000000000000000000000000000000000000000000000000000000; // 2^224
const POW_225: u256 = 0x200000000000000000000000000000000000000000000000000000000; // 2^225
const POW_226: u256 = 0x400000000000000000000000000000000000000000000000000000000; // 2^226
const POW_227: u256 = 0x800000000000000000000000000000000000000000000000000000000; // 2^227
const POW_228: u256 = 0x1000000000000000000000000000000000000000000000000000000000; // 2^228
const POW_229: u256 = 0x2000000000000000000000000000000000000000000000000000000000; // 2^229
const POW_230: u256 = 0x4000000000000000000000000000000000000000000000000000000000; // 2^230
const POW_231: u256 = 0x8000000000000000000000000000000000000000000000000000000000; // 2^231
const POW_232: u256 = 0x10000000000000000000000000000000000000000000000000000000000; // 2^232
const POW_233: u256 = 0x20000000000000000000000000000000000000000000000000000000000; // 2^233
const POW_234: u256 = 0x40000000000000000000000000000000000000000000000000000000000; // 2^234
const POW_235: u256 = 0x80000000000000000000000000000000000000000000000000000000000; // 2^235
const POW_236: u256 = 0x100000000000000000000000000000000000000000000000000000000000; // 2^236
const POW_237: u256 = 0x200000000000000000000000000000000000000000000000000000000000; // 2^237
const POW_238: u256 = 0x400000000000000000000000000000000000000000000000000000000000; // 2^238
const POW_239: u256 = 0x800000000000000000000000000000000000000000000000000000000000; // 2^239
const POW_240: u256 = 0x1000000000000000000000000000000000000000000000000000000000000; // 2^240
const POW_241: u256 = 0x2000000000000000000000000000000000000000000000000000000000000; // 2^241
const POW_242: u256 = 0x4000000000000000000000000000000000000000000000000000000000000; // 2^242
const POW_243: u256 = 0x8000000000000000000000000000000000000000000000000000000000000; // 2^243
const POW_244: u256 = 0x10000000000000000000000000000000000000000000000000000000000000; // 2^244
const POW_245: u256 = 0x20000000000000000000000000000000000000000000000000000000000000; // 2^245
const POW_246: u256 = 0x40000000000000000000000000000000000000000000000000000000000000; // 2^246
const POW_247: u256 = 0x80000000000000000000000000000000000000000000000000000000000000; // 2^247
const POW_248: u256 = 0x100000000000000000000000000000000000000000000000000000000000000; // 2^248
const POW_249: u256 = 0x200000000000000000000000000000000000000000000000000000000000000; // 2^249
const POW_250: u256 = 0x400000000000000000000000000000000000000000000000000000000000000; // 2^250
const POW_251: u256 = 0x800000000000000000000000000000000000000000000000000000000000000; // 2^251
const POW_252: u256 = 0x1000000000000000000000000000000000000000000000000000000000000000; // 2^252


#[test]
#[available_gas(3000000)]
fn test_pow() {
    assert(get_pow(0) == 0x1, 'pow 0');
    assert(get_pow(1) == 0x2, 'pow 1');
    assert(get_pow(2) == 0x4, 'pow 2');
    assert(get_pow(3) == 0x8, 'pow 3');
    assert(get_pow(4) == 0x10, 'pow 4');
    assert(get_pow(5) == 0x20, 'pow 5');
    assert(get_pow(6) == 0x40, 'pow 6');
    assert(get_pow(7) == 0x80, 'pow 7');
    assert(get_pow(8) == 0x100, 'pow 8');
    assert(get_pow(9) == 0x200, 'pow 9');
    assert(get_pow(10) == 0x400, 'pow 10');
    assert(get_pow(11) == 0x800, 'pow 11');
    assert(get_pow(12) == 0x1000, 'pow 12');
    assert(get_pow(13) == 0x2000, 'pow 13');
    assert(get_pow(14) == 0x4000, 'pow 14');
    assert(get_pow(15) == 0x8000, 'pow 15');
    assert(get_pow(16) == 0x10000, 'pow 16');
    assert(get_pow(17) == 0x20000, 'pow 17');
    assert(get_pow(18) == 0x40000, 'pow 18');
    assert(get_pow(19) == 0x80000, 'pow 19');
    assert(get_pow(20) == 0x100000, 'pow 20');
    assert(get_pow(21) == 0x200000, 'pow 21');
    assert(get_pow(22) == 0x400000, 'pow 22');
    assert(get_pow(23) == 0x800000, 'pow 23');
    assert(get_pow(24) == 0x1000000, 'pow 24');
    assert(get_pow(25) == 0x2000000, 'pow 25');
    assert(get_pow(26) == 0x4000000, 'pow 26');
    assert(get_pow(27) == 0x8000000, 'pow 27');
    assert(get_pow(28) == 0x10000000, 'pow 28');
    assert(get_pow(29) == 0x20000000, 'pow 29');
    assert(get_pow(30) == 0x40000000, 'pow 30');
    assert(get_pow(31) == 0x80000000, 'pow 31');
    assert(get_pow(32) == 0x100000000, 'pow 32');
    assert(get_pow(33) == 0x200000000, 'pow 33');
    assert(get_pow(34) == 0x400000000, 'pow 34');
    assert(get_pow(35) == 0x800000000, 'pow 35');
    assert(get_pow(36) == 0x1000000000, 'pow 36');
    assert(get_pow(37) == 0x2000000000, 'pow 37');
    assert(get_pow(38) == 0x4000000000, 'pow 38');
    assert(get_pow(39) == 0x8000000000, 'pow 39');
    assert(get_pow(40) == 0x10000000000, 'pow 40');
    assert(get_pow(41) == 0x20000000000, 'pow 41');
    assert(get_pow(42) == 0x40000000000, 'pow 42');
    assert(get_pow(43) == 0x80000000000, 'pow 43');
    assert(get_pow(44) == 0x100000000000, 'pow 44');
    assert(get_pow(45) == 0x200000000000, 'pow 45');
    assert(get_pow(46) == 0x400000000000, 'pow 46');
    assert(get_pow(47) == 0x800000000000, 'pow 47');
    assert(get_pow(48) == 0x1000000000000, 'pow 48');
    assert(get_pow(49) == 0x2000000000000, 'pow 49');
    assert(get_pow(50) == 0x4000000000000, 'pow 50');
    assert(get_pow(51) == 0x8000000000000, 'pow 51');
    assert(get_pow(52) == 0x10000000000000, 'pow 52');
    assert(get_pow(53) == 0x20000000000000, 'pow 53');
    assert(get_pow(54) == 0x40000000000000, 'pow 54');
    assert(get_pow(55) == 0x80000000000000, 'pow 55');
    assert(get_pow(56) == 0x100000000000000, 'pow 56');
    assert(get_pow(57) == 0x200000000000000, 'pow 57');
    assert(get_pow(58) == 0x400000000000000, 'pow 58');
    assert(get_pow(59) == 0x800000000000000, 'pow 59');
    assert(get_pow(60) == 0x1000000000000000, 'pow 60');
    assert(get_pow(61) == 0x2000000000000000, 'pow 61');
    assert(get_pow(62) == 0x4000000000000000, 'pow 62');
    assert(get_pow(63) == 0x8000000000000000, 'pow 63');
    assert(get_pow(64) == 0x10000000000000000, 'pow 64');
    assert(get_pow(65) == 0x20000000000000000, 'pow 65');
    assert(get_pow(66) == 0x40000000000000000, 'pow 66');
    assert(get_pow(67) == 0x80000000000000000, 'pow 67');
    assert(get_pow(68) == 0x100000000000000000, 'pow 68');
    assert(get_pow(69) == 0x200000000000000000, 'pow 69');
    assert(get_pow(70) == 0x400000000000000000, 'pow 70');
    assert(get_pow(71) == 0x800000000000000000, 'pow 71');
    assert(get_pow(72) == 0x1000000000000000000, 'pow 72');
    assert(get_pow(73) == 0x2000000000000000000, 'pow 73');
    assert(get_pow(74) == 0x4000000000000000000, 'pow 74');
    assert(get_pow(75) == 0x8000000000000000000, 'pow 75');
    assert(get_pow(76) == 0x10000000000000000000, 'pow 76');
    assert(get_pow(77) == 0x20000000000000000000, 'pow 77');
    assert(get_pow(78) == 0x40000000000000000000, 'pow 78');
    assert(get_pow(79) == 0x80000000000000000000, 'pow 79');
    assert(get_pow(80) == 0x100000000000000000000, 'pow 80');
    assert(get_pow(81) == 0x200000000000000000000, 'pow 81');
    assert(get_pow(82) == 0x400000000000000000000, 'pow 82');
    assert(get_pow(83) == 0x800000000000000000000, 'pow 83');
    assert(get_pow(84) == 0x1000000000000000000000, 'pow 84');
    assert(get_pow(85) == 0x2000000000000000000000, 'pow 85');
    assert(get_pow(86) == 0x4000000000000000000000, 'pow 86');
    assert(get_pow(87) == 0x8000000000000000000000, 'pow 87');
    assert(get_pow(88) == 0x10000000000000000000000, 'pow 88');
    assert(get_pow(89) == 0x20000000000000000000000, 'pow 89');
    assert(get_pow(90) == 0x40000000000000000000000, 'pow 90');
    assert(get_pow(91) == 0x80000000000000000000000, 'pow 91');
    assert(get_pow(92) == 0x100000000000000000000000, 'pow 92');
    assert(get_pow(93) == 0x200000000000000000000000, 'pow 93');
    assert(get_pow(94) == 0x400000000000000000000000, 'pow 94');
    assert(get_pow(95) == 0x800000000000000000000000, 'pow 95');
    assert(get_pow(96) == 0x1000000000000000000000000, 'pow 96');
    assert(get_pow(97) == 0x2000000000000000000000000, 'pow 97');
    assert(get_pow(98) == 0x4000000000000000000000000, 'pow 98');
    assert(get_pow(99) == 0x8000000000000000000000000, 'pow 99');
    assert(get_pow(100) == 0x10000000000000000000000000, 'pow 100');
    assert(get_pow(101) == 0x20000000000000000000000000, 'pow 101');
    assert(get_pow(102) == 0x40000000000000000000000000, 'pow 102');
    assert(get_pow(103) == 0x80000000000000000000000000, 'pow 103');
    assert(get_pow(104) == 0x100000000000000000000000000, 'pow 104');
    assert(get_pow(105) == 0x200000000000000000000000000, 'pow 105');
    assert(get_pow(106) == 0x400000000000000000000000000, 'pow 106');
    assert(get_pow(107) == 0x800000000000000000000000000, 'pow 107');
    assert(get_pow(108) == 0x1000000000000000000000000000, 'pow 108');
    assert(get_pow(109) == 0x2000000000000000000000000000, 'pow 109');
    assert(get_pow(110) == 0x4000000000000000000000000000, 'pow 110');
    assert(get_pow(111) == 0x8000000000000000000000000000, 'pow 111');
    assert(get_pow(112) == 0x10000000000000000000000000000, 'pow 112');
    assert(get_pow(113) == 0x20000000000000000000000000000, 'pow 113');
    assert(get_pow(114) == 0x40000000000000000000000000000, 'pow 114');
    assert(get_pow(115) == 0x80000000000000000000000000000, 'pow 115');
    assert(get_pow(116) == 0x100000000000000000000000000000, 'pow 116');
    assert(get_pow(117) == 0x200000000000000000000000000000, 'pow 117');
    assert(get_pow(118) == 0x400000000000000000000000000000, 'pow 118');
    assert(get_pow(119) == 0x800000000000000000000000000000, 'pow 119');
    assert(get_pow(120) == 0x1000000000000000000000000000000, 'pow 120');
    assert(get_pow(121) == 0x2000000000000000000000000000000, 'pow 121');
    assert(get_pow(122) == 0x4000000000000000000000000000000, 'pow 122');
    assert(get_pow(123) == 0x8000000000000000000000000000000, 'pow 123');
    assert(get_pow(124) == 0x10000000000000000000000000000000, 'pow 124');
    assert(get_pow(125) == 0x20000000000000000000000000000000, 'pow 125');
    assert(get_pow(126) == 0x40000000000000000000000000000000, 'pow 126');
    assert(get_pow(127) == 0x80000000000000000000000000000000, 'pow 127');
    assert(get_pow(128) == 0x100000000000000000000000000000000, 'pow 128');
    assert(get_pow(129) == 0x200000000000000000000000000000000, 'pow 129');
    assert(get_pow(130) == 0x400000000000000000000000000000000, 'pow 130');
    assert(get_pow(131) == 0x800000000000000000000000000000000, 'pow 131');
    assert(get_pow(132) == 0x1000000000000000000000000000000000, 'pow 132');
    assert(get_pow(133) == 0x2000000000000000000000000000000000, 'pow 133');
    assert(get_pow(134) == 0x4000000000000000000000000000000000, 'pow 134');
    assert(get_pow(135) == 0x8000000000000000000000000000000000, 'pow 135');
    assert(get_pow(136) == 0x10000000000000000000000000000000000, 'pow 136');
    assert(get_pow(137) == 0x20000000000000000000000000000000000, 'pow 137');
    assert(get_pow(138) == 0x40000000000000000000000000000000000, 'pow 138');
    assert(get_pow(139) == 0x80000000000000000000000000000000000, 'pow 139');
    assert(get_pow(140) == 0x100000000000000000000000000000000000, 'pow 140');
    assert(get_pow(141) == 0x200000000000000000000000000000000000, 'pow 141');
    assert(get_pow(142) == 0x400000000000000000000000000000000000, 'pow 142');
    assert(get_pow(143) == 0x800000000000000000000000000000000000, 'pow 143');
    assert(get_pow(144) == 0x1000000000000000000000000000000000000, 'pow 144');
    assert(get_pow(145) == 0x2000000000000000000000000000000000000, 'pow 145');
    assert(get_pow(146) == 0x4000000000000000000000000000000000000, 'pow 146');
    assert(get_pow(147) == 0x8000000000000000000000000000000000000, 'pow 147');
    assert(get_pow(148) == 0x10000000000000000000000000000000000000, 'pow 148');
    assert(get_pow(149) == 0x20000000000000000000000000000000000000, 'pow 149');
    assert(get_pow(150) == 0x40000000000000000000000000000000000000, 'pow 150');
    assert(get_pow(151) == 0x80000000000000000000000000000000000000, 'pow 151');
    assert(get_pow(152) == 0x100000000000000000000000000000000000000, 'pow 152');
    assert(get_pow(153) == 0x200000000000000000000000000000000000000, 'pow 153');
    assert(get_pow(154) == 0x400000000000000000000000000000000000000, 'pow 154');
    assert(get_pow(155) == 0x800000000000000000000000000000000000000, 'pow 155');
    assert(get_pow(156) == 0x1000000000000000000000000000000000000000, 'pow 156');
    assert(get_pow(157) == 0x2000000000000000000000000000000000000000, 'pow 157');
    assert(get_pow(158) == 0x4000000000000000000000000000000000000000, 'pow 158');
    assert(get_pow(159) == 0x8000000000000000000000000000000000000000, 'pow 159');
    assert(get_pow(160) == 0x10000000000000000000000000000000000000000, 'pow 160');
    assert(get_pow(161) == 0x20000000000000000000000000000000000000000, 'pow 161');
    assert(get_pow(162) == 0x40000000000000000000000000000000000000000, 'pow 162');
    assert(get_pow(163) == 0x80000000000000000000000000000000000000000, 'pow 163');
    assert(get_pow(164) == 0x100000000000000000000000000000000000000000, 'pow 164');
    assert(get_pow(165) == 0x200000000000000000000000000000000000000000, 'pow 165');
    assert(get_pow(166) == 0x400000000000000000000000000000000000000000, 'pow 166');
    assert(get_pow(167) == 0x800000000000000000000000000000000000000000, 'pow 167');
    assert(get_pow(168) == 0x1000000000000000000000000000000000000000000, 'pow 168');
    assert(get_pow(169) == 0x2000000000000000000000000000000000000000000, 'pow 169');
    assert(get_pow(170) == 0x4000000000000000000000000000000000000000000, 'pow 170');
    assert(get_pow(171) == 0x8000000000000000000000000000000000000000000, 'pow 171');
    assert(get_pow(172) == 0x10000000000000000000000000000000000000000000, 'pow 172');
    assert(get_pow(173) == 0x20000000000000000000000000000000000000000000, 'pow 173');
    assert(get_pow(174) == 0x40000000000000000000000000000000000000000000, 'pow 174');
    assert(get_pow(175) == 0x80000000000000000000000000000000000000000000, 'pow 175');
    assert(get_pow(176) == 0x100000000000000000000000000000000000000000000, 'pow 176');
    assert(get_pow(177) == 0x200000000000000000000000000000000000000000000, 'pow 177');
    assert(get_pow(178) == 0x400000000000000000000000000000000000000000000, 'pow 178');
    assert(get_pow(179) == 0x800000000000000000000000000000000000000000000, 'pow 179');
    assert(get_pow(180) == 0x1000000000000000000000000000000000000000000000, 'pow 180');
    assert(get_pow(181) == 0x2000000000000000000000000000000000000000000000, 'pow 181');
    assert(get_pow(182) == 0x4000000000000000000000000000000000000000000000, 'pow 182');
    assert(get_pow(183) == 0x8000000000000000000000000000000000000000000000, 'pow 183');
    assert(get_pow(184) == 0x10000000000000000000000000000000000000000000000, 'pow 184');
    assert(get_pow(185) == 0x20000000000000000000000000000000000000000000000, 'pow 185');
    assert(get_pow(186) == 0x40000000000000000000000000000000000000000000000, 'pow 186');
    assert(get_pow(187) == 0x80000000000000000000000000000000000000000000000, 'pow 187');
    assert(get_pow(188) == 0x100000000000000000000000000000000000000000000000, 'pow 188');
    assert(get_pow(189) == 0x200000000000000000000000000000000000000000000000, 'pow 189');
    assert(get_pow(190) == 0x400000000000000000000000000000000000000000000000, 'pow 190');
    assert(get_pow(191) == 0x800000000000000000000000000000000000000000000000, 'pow 191');
    assert(get_pow(192) == 0x1000000000000000000000000000000000000000000000000, 'pow 192');
    assert(get_pow(193) == 0x2000000000000000000000000000000000000000000000000, 'pow 193');
    assert(get_pow(194) == 0x4000000000000000000000000000000000000000000000000, 'pow 194');
    assert(get_pow(195) == 0x8000000000000000000000000000000000000000000000000, 'pow 195');
    assert(get_pow(196) == 0x10000000000000000000000000000000000000000000000000, 'pow 196');
    assert(get_pow(197) == 0x20000000000000000000000000000000000000000000000000, 'pow 197');
    assert(get_pow(198) == 0x40000000000000000000000000000000000000000000000000, 'pow 198');
    assert(get_pow(199) == 0x80000000000000000000000000000000000000000000000000, 'pow 199');
    assert(get_pow(200) == 0x100000000000000000000000000000000000000000000000000, 'pow 200');
    assert(get_pow(201) == 0x200000000000000000000000000000000000000000000000000, 'pow 201');
    assert(get_pow(202) == 0x400000000000000000000000000000000000000000000000000, 'pow 202');
    assert(get_pow(203) == 0x800000000000000000000000000000000000000000000000000, 'pow 203');
    assert(get_pow(204) == 0x1000000000000000000000000000000000000000000000000000, 'pow 204');
    assert(get_pow(205) == 0x2000000000000000000000000000000000000000000000000000, 'pow 205');
    assert(get_pow(206) == 0x4000000000000000000000000000000000000000000000000000, 'pow 206');
    assert(get_pow(207) == 0x8000000000000000000000000000000000000000000000000000, 'pow 207');
    assert(get_pow(208) == 0x10000000000000000000000000000000000000000000000000000, 'pow 208');
    assert(get_pow(209) == 0x20000000000000000000000000000000000000000000000000000, 'pow 209');
    assert(get_pow(210) == 0x40000000000000000000000000000000000000000000000000000, 'pow 210');
    assert(get_pow(211) == 0x80000000000000000000000000000000000000000000000000000, 'pow 211');
    assert(get_pow(212) == 0x100000000000000000000000000000000000000000000000000000, 'pow 212');
    assert(get_pow(213) == 0x200000000000000000000000000000000000000000000000000000, 'pow 213');
    assert(get_pow(214) == 0x400000000000000000000000000000000000000000000000000000, 'pow 214');
    assert(get_pow(215) == 0x800000000000000000000000000000000000000000000000000000, 'pow 215');
    assert(get_pow(216) == 0x1000000000000000000000000000000000000000000000000000000, 'pow 216');
    assert(get_pow(217) == 0x2000000000000000000000000000000000000000000000000000000, 'pow 217');
    assert(get_pow(218) == 0x4000000000000000000000000000000000000000000000000000000, 'pow 218');
    assert(get_pow(219) == 0x8000000000000000000000000000000000000000000000000000000, 'pow 219');
    assert(get_pow(220) == 0x10000000000000000000000000000000000000000000000000000000, 'pow 220');
    assert(get_pow(221) == 0x20000000000000000000000000000000000000000000000000000000, 'pow 221');
    assert(get_pow(222) == 0x40000000000000000000000000000000000000000000000000000000, 'pow 222');
    assert(get_pow(223) == 0x80000000000000000000000000000000000000000000000000000000, 'pow 223');
    assert(get_pow(224) == 0x100000000000000000000000000000000000000000000000000000000, 'pow 224');
    assert(get_pow(225) == 0x200000000000000000000000000000000000000000000000000000000, 'pow 225');
    assert(get_pow(226) == 0x400000000000000000000000000000000000000000000000000000000, 'pow 226');
    assert(get_pow(227) == 0x800000000000000000000000000000000000000000000000000000000, 'pow 227');
    assert(get_pow(228) == 0x1000000000000000000000000000000000000000000000000000000000, 'pow 228');
    assert(get_pow(229) == 0x2000000000000000000000000000000000000000000000000000000000, 'pow 229');
    assert(get_pow(230) == 0x4000000000000000000000000000000000000000000000000000000000, 'pow 230');
    assert(get_pow(231) == 0x8000000000000000000000000000000000000000000000000000000000, 'pow 231');
    assert(
        get_pow(232) == 0x10000000000000000000000000000000000000000000000000000000000, 'pow 232'
    );
    assert(
        get_pow(233) == 0x20000000000000000000000000000000000000000000000000000000000, 'pow 233'
    );
    assert(
        get_pow(234) == 0x40000000000000000000000000000000000000000000000000000000000, 'pow 234'
    );
    assert(
        get_pow(235) == 0x80000000000000000000000000000000000000000000000000000000000, 'pow 235'
    );
    assert(
        get_pow(236) == 0x100000000000000000000000000000000000000000000000000000000000, 'pow 236'
    );
    assert(
        get_pow(237) == 0x200000000000000000000000000000000000000000000000000000000000, 'pow 237'
    );
    assert(
        get_pow(238) == 0x400000000000000000000000000000000000000000000000000000000000, 'pow 238'
    );
    assert(
        get_pow(239) == 0x800000000000000000000000000000000000000000000000000000000000, 'pow 239'
    );
    assert(
        get_pow(240) == 0x1000000000000000000000000000000000000000000000000000000000000, 'pow 240'
    );
    assert(
        get_pow(241) == 0x2000000000000000000000000000000000000000000000000000000000000, 'pow 241'
    );
    assert(
        get_pow(242) == 0x4000000000000000000000000000000000000000000000000000000000000, 'pow 242'
    );
    assert(
        get_pow(243) == 0x8000000000000000000000000000000000000000000000000000000000000, 'pow 243'
    );
    assert(
        get_pow(244) == 0x10000000000000000000000000000000000000000000000000000000000000, 'pow 244'
    );
    assert(
        get_pow(245) == 0x20000000000000000000000000000000000000000000000000000000000000, 'pow 245'
    );
    assert(
        get_pow(246) == 0x40000000000000000000000000000000000000000000000000000000000000, 'pow 246'
    );
    assert(
        get_pow(247) == 0x80000000000000000000000000000000000000000000000000000000000000, 'pow 247'
    );
    assert(
        get_pow(248) == 0x100000000000000000000000000000000000000000000000000000000000000, 'pow 248'
    );
    assert(
        get_pow(249) == 0x200000000000000000000000000000000000000000000000000000000000000, 'pow 249'
    );
    assert(
        get_pow(250) == 0x400000000000000000000000000000000000000000000000000000000000000, 'pow 250'
    );
    assert(
        get_pow(251) == 0x800000000000000000000000000000000000000000000000000000000000000, 'pow 251'
    );
    assert(
        get_pow(252) == 0x1000000000000000000000000000000000000000000000000000000000000000,
        'pow 252'
    );
}


// ------------------------------ generate script in Java ------------------------------

// public class Main {

//     static String ifString = "if ";
//     static String elseString = "else ";
//     static String left = "{ ";
//     static String right = "} ";
//     static String smallerThan = "<= ";
//     static String equals = "== ";
//     static String pow = "POW_";
//     static String position = "position";

//     static String assertString = "assert(get_pow( ";
//     static String ll = " ) ";
//     static String pre = "0x";
//     static String mid = ", 'pow ";
//     static String end = "'); ";

//     public static void main(String[] args) {

//         // String result = circle("", 0, 252);

//         String result = testCircle("", 0, "1", 252);

//         System.out.println(result);

//     }

//     public static String testCircle(String result, int count, String pow, int limit) {

//         result += assertString + count + ll + equals + pre + pow + mid + count + end;

//         if (pow.startsWith("1")) {
//             pow = "2" + pow.substring(1);
//         } else if (pow.startsWith("2")) {
//             pow = "4" + pow.substring(1);
//         } else if (pow.startsWith("4")) {
//             pow = "8" + pow.substring(1);
//         } else {
//             pow = "1" + pow.substring(1) + "0";
//         }

//         if (count < limit) {
//             return testCircle(result, count + 1, pow, limit);
//         } else {
//             return result;
//         }

//     }

//     public static String circle(String result, int low, int high) {

//         int dis = high - low;
//         if (dis > 1) {
//             result += circle(ifString + position + smallerThan + (dis / 2 + low) + left, low, (dis / 2 + low)) + right +
//                     circle(elseString + left, (dis / 2 + low + 1), high) + right;
//         } else if (dis == 1) {
//             result += ifString + position + equals + low + left + pow + low + right + elseString + left + pow + high + right;
//         } else {
//             result += pow + low;
//         }

//         return result;

//     }

// }