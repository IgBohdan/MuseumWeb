const Footer = () => {
	return (
		<>
			<header style= {{
				background: "black",
				borderBottom: "5px solid #b80",
				paddingTop: "20px",
                fontFamily: "TimesNewRoman,cursive",
                fontSize: "20px"
			}}>
				<div style = {{
					width: "85%",
					// max-width: "1200px",
					margin: "auto",
					// z-index: "1003"
				}}>
					<div style={{
                        float: "left",
                        marginRight: "20px",
                        width: "125px"
                    }}>
						<h2 style={{
                            marginBlockStart: "0",
                            marginBlockEnd: "0"
                        }}>
							Назва музею
						</h2>
					</div>

                    <div style={{
                        justifyContent: "end",
                        marginLeft: "auto",
                        alignItems: "center",
                        maxHeight: "90px",
                        display: "flex"
                    }}>
                        <span style={{
                            margin: "1px 50px",
                            fontSize: ".8em"
                        }}>Контакти</span>

                        <span style={{
                            background: "#b80",
                            borderRadius: "5px",
                            padding: "1px 5px",
                            fontSize: ".8em"
                        }}>Підтримати</span>
                    </div>

                        {/* тут ще щось можна буде додати */}
                    <div>
                        
                    </div>
					
                    <div style={{
                    marginLeft: "auto",
                    marginTop: "20px",
                    fontSize: ".9em"
                }}>
                        <ul style={{
                            listStyle: "none",
                            flexDirection: "row",
                            display: "flex",
                            justifyContent: "end"
                        }}>
                            <li style={{
                                padding: "7px"
                            }}>
                                Музей
                            </li>
                            <li style={{
                                padding: "7px"
                            }}>
                                Виставки та події
                            </li>  
                            <li style={{
                                padding: "7px"
                            }}>
                                Послуги та ціни
                            </li>
                            <li style={{
                                padding: "7px"
                            }}>
                                Співпраця
                            </li>
                            <li style={{
                                padding: "7px"
                            }}>
                                Про нас
                            </li>
                        </ul>
                	</div>                    
				</div>
			</header>
		</>
	)
}

export default Footer
