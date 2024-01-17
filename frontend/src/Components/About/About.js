import React, {useRef} from 'react'
import './About.css'

export default function About() {
    const ref_1 = useRef(null)
    const ref_2 = useRef(null)
    const ref_3 = useRef(null)
    const ref_4 = useRef(null)
    const ref_5 = useRef(null)
    const ref_6 = useRef(null)
    const ref_7 = useRef(null)
    const ref_8 = useRef(null)
    const ref_9 = useRef(null)
    const ref_10 = useRef(null)
    const ref_11 = useRef(null)
    const ref_12 = useRef(null)
    const ref_13 = useRef(null)

    let handleref_1 = (e) => {
        window.scrollTo({
            top : ref_1.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_2 = (e) => {
        window.scrollTo({
            top : ref_2.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_3 = (e) => {
        window.scrollTo({
            top : ref_3.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_4 = (e) => {
        window.scrollTo({
            top : ref_4.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_5 = (e) => {
        window.scrollTo({
            top : ref_5.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_6 = (e) => {
        window.scrollTo({
            top : ref_6.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_7 = (e) => {
        window.scrollTo({
            top : ref_7.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_8 = (e) => {
        window.scrollTo({
            top : ref_8.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_9 = (e) => {
        window.scrollTo({
            top : ref_9.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_10 = (e) => {
        window.scrollTo({
            top : ref_10.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_11 = (e) => {
        window.scrollTo({
            top : ref_11.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_12 = (e) => {
        window.scrollTo({
            top : ref_12.current.offsetTop,
            behavior : "smooth"
        });
    }
    let handleref_13 = (e) => {
        window.scrollTo({
            top : ref_13.current.offsetTop,
            behavior : "smooth"
        });
    }

    return (
        <>
        <div className="aboutMain">
        <div className="skipTo">
            <h4 onClick={handleref_1}>What is Stock Market?</h4>
            <h4 onClick={handleref_2}>Understanding the Stock Market</h4>
            <h4 onClick={handleref_3}>Special Considerations</h4>
            <h4 onClick={handleref_4}>Functions of a Stock Market</h4>
            <h4 onClick={handleref_5}>Fair Dealing in Securities Transactions</h4>
            <h4 onClick={handleref_6}>Efficient Price Discovery</h4>
            <h4 onClick={handleref_7}>Liquidity Maintenance</h4>
            <h4 onClick={handleref_8}>Security and Validity of Transactions</h4>
            <h4 onClick={handleref_9}>Support All Eligible Types of Market Participants</h4>
            <h4 onClick={handleref_10}>Investor Protection</h4>
            <h4 onClick={handleref_11}>Balanced Regulation</h4>
            <h4 onClick={handleref_12}>Regulating the Stock Market</h4>
            <h4 onClick={handleref_13}>Competition Faced by Stock Markets</h4>
        </div>
            <div className="aboutContainer">
                <h1 >About Stock Market</h1>

                <h3 ref={ref_1}>What is Stock Market?</h3>
                <p style={{marginTop : "10px"}}>
                    The stock market broadly refers to the collection of exchanges and other venues where the buying, selling, and issuance of shares of publicly held companies take place. Such financial activities are conducted through institutionalized formal exchanges (whether physical or electronic) or via over-the-counter (OTC) marketplaces that operate under a defined set of regulations.
                </p>
                <p style={{marginTop : "10px"}}>
                    While both the terms “stock market” and “stock exchange” are often used interchangeably, the latter term generally comprises a subset of the former. If one trades in the stock market, it means that they buy or sell shares on one (or more) of the stock exchange(s) that are part of the overall stock market. A given country or region may have one or more exchanges comprising their stock market. The leading U.S. stock exchanges include the New York Stock Exchange (NYSE) and the Nasdaq. These leading national exchanges, along with several other exchanges operating in the country, form the stock market of the United States.
                </p>

                <h3  ref={ref_2} style={{marginTop : "20px"}}>Understanding the Stock Market</h3>
                <p style={{marginTop : "10px"}}>
                    The stock market allows numerous buyers and sellers of securities to meet, interact, and transact. Stock markets allow for price discovery for shares of corporations and serve as a barometer for the overall economy. Since the number of stock market participants is huge, one can often be assured of a fair price and a high degree of liquidity as various market participants compete with one another for the best price.
                </p>
                <p style={{marginTop : "10px"}}>
                    A stock market is a regulated and controlled environment. In the United States, the main regulators include the Securities and Exchange Commission (SEC) and market participants under the purview of the Financial Industry Regulatory Authority (FINRA). Since the stock market brings together hundreds of thousands of market participants who wish to buy and sell shares, it ensures fair pricing practices and transparency in transactions. While earlier stock markets used to issue and deal in paper-based physical share certificates, the modern-day computerized stock markets operate electronically.
                </p>

                <h3  ref={ref_3} style={{marginTop : "20px"}}>Special Considerations</h3>
                <p style={{marginTop : "10px"}}>
                    The stock exchange shoulders the responsibility of ensuring price transparency, liquidity, price discovery, and fair dealings in such trading activities. As almost all major stock markets across the globe now operate electronically, the exchange maintains trading systems that efficiently manage the buy and sell orders from various market participants. They perform the price-matching function to facilitate trade execution at a price that is fair to both buyers and sellers.
                </p>
                <p style={{marginTop : "10px"}}>
                    A listed company may also offer new, additional shares through other offerings at a later stage, such as through rights issues or follow-on offerings. They may even buy back or delist their shares. The stock exchange facilitates such transactions.
                </p>
                <p style={{marginTop : "10px"}}>
                    The stock exchange often creates and maintains various market-level and sector-specific indicators, like the S&P (Standard & Poor’s) 500 index or the Nasdaq 100 index, which provide a measure to track the movement of the overall market. Other methods include the Stochastic Oscillator and the Stochastic Momentum Index.
                </p>
                <p style={{marginTop : "10px"}}>
                    The stock exchanges also maintain all company news, announcements, and financial reporting, which can usually be accessed on their official websites. A stock exchange also supports various other corporate-level, transaction-related activities. For instance, profitable companies may reward investors by paying dividends that usually come from part of the company’s earnings. The exchange maintains all such information and may support its processing to a certain extent.
                </p>
                <h3  ref={ref_4} style={{marginTop : "20px"}}>Functions of a Stock Market</h3>
                <p style={{marginTop : "10px"}}>
                A stock market primarily serves the following main functions:
                </p>
                <h3  ref={ref_5} style={{marginTop : "20px"}}>Fair Dealing in Securities Transactions</h3>
                <p style={{marginTop : "10px"}}>
                Depending on the standard rules of supply and demand, the stock exchange needs to ensure that all interested market participants have instant access to data for all buy and sell orders, thereby helping in the fair and transparent pricing of securities. Additionally, it should also perform efficient matching of appropriate buy and sell orders.
                </p>
                <p style={{marginTop : "10px"}}>
                For example, there may be three buyers who have placed orders for buying Microsoft shares at $100, $105, and $110, and there may be four sellers who are willing to sell Microsoft shares at $110, $112, $115, and $120. The exchange (through automated trading systems) needs to ensure that the best buy and the best sell are matched, which in this case is at $110 for the given quantity of trade.
                </p>
                <h3  ref={ref_6} style={{marginTop : "20px"}}>Efficient Price Discovery</h3>
                <p style={{marginTop : "10px"}}>
                Stock markets need to support an efficient mechanism for price discovery, which refers to the act of deciding the proper price of a security and is usually performed by assessing market supply and demand and other factors associated with the transactions.
                </p>
                <p style={{marginTop : "10px"}}>
                Let’s say a U.S.-based software company is trading at a price of $100 and has a market capitalization of $5 billion. A news item comes in that the European Union (EU) regulator has imposed a $2 billion fine on the company, which essentially means that 40 percent of the company’s value may be wiped out. While the stock market may have imposed a trading price range of $90 and $110 on the company’s share price, it should efficiently change the permissible trading price limit to accommodate for the possible changes in the share price, or else shareholders may struggle to trade at a fair price.
                </p>
                <h3  ref={ref_7} style={{marginTop : "20px"}}>Liquidity Maintenance</h3>
                <p style={{marginTop : "10px"}}>
                While getting the number of buyers and sellers for a particular financial security are out of control for the stock market, it needs to ensure that whoever is qualified and willing to trade gets instant access to place orders that should get executed at a fair price.
                </p>
                <h3  ref={ref_8} style={{marginTop : "20px"}}>Security and Validity of Transactions</h3>
                <p style={{marginTop : "10px"}}>
                While more participants are important for the efficient working of a market, the same market needs to ensure that all participants are verified and remain compliant with the necessary rules and regulations, leaving no room for default by any of the parties. Additionally, it should ensure that all associated entities operating in the market adhere to the rules and work within the legal framework given by the regulator.
                </p>
                <h3  ref={ref_9} style={{marginTop : "20px"}}>Support All Eligible Types of Market Participants</h3>
                <p style={{marginTop : "10px"}}>
                A marketplace is made up of a variety of participants, which include market makers, investors, traders, speculators, and hedgers. All of these participants operate in the stock market, with different roles and functions. For instance, an investor may buy stocks and hold them for the long term, spanning many years, while a trader may enter and exit a position within seconds. A market maker provides necessary liquidity in the market, while a hedger may like to trade in derivatives for mitigating the risk involved in investments. The stock market should ensure that all such participants are able to operate seamlessly, fulfilling their desired roles to ensure that the market continues to operate efficiently.
                </p>
                <h3  ref={ref_10} style={{marginTop : "20px"}}>Investor Protection</h3>
                <p style={{marginTop : "10px"}}>
                Along with wealthy and institutional investors, a very large number of small investors are also served by the stock market for their small amount of investments. These investors may have limited financial knowledge and not be fully aware of the pitfalls of investing in stocks and other listed instruments. The stock exchange must implement necessary measures to offer the necessary protection to such investors to shield them from financial loss and ensure customer trust.
                </p>
                <p style={{marginTop : "10px"}}>
                For instance, a stock exchange may categorize stocks in various segments depending on their risk profiles and allow limited or no trading by common investors in high-risk stocks. Exchanges often impose restrictions to prevent individuals with limited income and knowledge from getting into risky bets of derivatives.
                </p>
                <h3  ref={ref_11} style={{marginTop : "20px"}}>Balanced Regulation</h3>
                <p style={{marginTop : "10px"}}>
                Listed companies are largely regulated, and their dealings are monitored by market regulators, such as the above-mentioned SEC. Additionally, exchanges mandate certain requirements—for example, timely filing of quarterly financial reports and instant reporting of any relevant developments—to ensure that all market participants become aware of corporate happenings. Failure to adhere to the regulations can lead to suspension of trading by the exchanges and other disciplinary measures.
                </p>
                <h3  ref={ref_12} style={{marginTop : "20px"}}>Regulating the Stock Market</h3>
                <p style={{marginTop : "10px"}}>
                A local financial regulator or competent monetary authority or institute is assigned the task of regulating the stock market of a country. The SEC is the regulatory body charged with overseeing the U.S. stock markets. The SEC is a federal agency that works independently of the government and political pressure. The mission of the SEC is stated as “protecting investors, maintaining fair, orderly, and efficient markets, and facilitating capital formation.”
                </p>
                <h3  ref={ref_13} style={{marginTop : "20px"}}>Competition Faced by Stock Markets</h3>
                <p style={{marginTop : "10px"}}>
                While individual stock exchanges compete against each other to get maximum transaction volume, stock markets as a whole may be facing competitive threats on two fronts.
                </p>
            </div>
        </div>
            
        </>
    )
}
