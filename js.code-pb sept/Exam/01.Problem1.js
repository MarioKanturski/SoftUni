function pcStore (processor,graphicCard,ram,ramCount,percentDiscount) {
  
    let priceForProcessor = processor * 1.57;
    let priceForGraphicCard = graphicCard * 1.57;
    let priceForRam = ram * 1.57;

    let totalRam = priceForRam * ramCount;
    let processorDiscount = priceForProcessor * (1 - percentDiscount);
    let graphicCardDiscount = priceForGraphicCard * (1 - percentDiscount);

    let totalPrice = processorDiscount + graphicCardDiscount + totalRam;
    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);


}

pcStore (500,
200,
80,
2,
0.05);